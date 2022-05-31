<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BestOfferController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SoldProductController;
use App\Http\Controllers\UserController;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use PHPUnit\Framework\MockObject\Rule\Parameters;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['auth:sanctum', 'throttle:none']], function () {
    Route::resource('product', ProductController::class)->only(['store', 'destroy', 'update']);
    Route::get('/user', [UserController::class, 'user']);
    Route::get('/data/user', [UserController::class, 'index']);
    Route::get('/data/sold-product', [SoldProductController::class, 'index']);
    Route::get('/admin/{id}', [AdminController::class, 'show']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/sold-product', [SoldProductController::class, 'store']);
    Route::post('/best-offer', [BestOfferController::class, 'store']);
    Route::put('/user/{id}', [UserController::class, 'update']);
    Route::put('/admin/{id}', [AdminController::class, 'update']);
    Route::put('/setting', [SettingController::class, 'update']);
    Route::delete('/user/{id}', [UserController::class, 'delete']);
});

Route::resource('product', ProductController::class)->only(['index', 'show'])->parameters(['product' => 'product:slug']);
Route::resource('best-offer', BestOfferController::class)->only(['index']);
Route::post('/password/forgot', [AuthController::class, 'sendPasswordResetLinkEmail'])->middleware('throttle:5,1');
Route::post('/password/reset', [AuthController::class, 'resetPassword']);
Route::get('/products', [ProductController::class, 'all']);
Route::get('/setting', [SettingController::class, 'index']);
Route::get('/admin', [AdminController::class, 'index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/login/admin', [AuthController::class, 'loginAdmin']);
