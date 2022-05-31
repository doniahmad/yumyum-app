<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::with('products')->get();
        return response()->json($categories, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $data = Category::with('products')->where('category', $category->category)->paginate(32);
        return response()->json($data);
    }
}
