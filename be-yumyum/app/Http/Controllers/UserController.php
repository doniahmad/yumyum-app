<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{

    public function user(Request $request)
    {
        $response = $request->user();
        $response->role = $response->getRoleNames()[0];
        $response->premission = $response->getPermissionsViaRoles()->pluck("name");
        $response->makeHidden("roles");
        return response()->json($response, 200);
    }

    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $validateData = $request->validate([
            'name' => 'string|max:255',
            'contact' => 'string|max:255',
            'address' => 'string|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,svg',
        ]);

        if ($request->file('image')) {
            if ($user->image == "https://res.cloudinary.com/diklqtdsg/image/upload/v1653280959/yumyum_assets/person_dvp4we.svg") {
                $validateData['image'] = CloudinaryStorage::upload($request->image->getRealPath(), $request->image->getClientOriginalName());
            } else {
                $validateData['image'] = CloudinaryStorage::replace($user->image, $request->image->getRealPath(), $request->image->getClientOriginalName());
            }
        }

        try {
            $user->update($validateData);
            return response()->json([
                'succes' => true,
                'message' => 'Success',
                'data' => $validateData,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }

    public function delete($id)
    {
        $user = User::find($id);
        CloudinaryStorage::delete($user->image);
        $user->delete();
        return response()->json($user, 200);
    }
}
