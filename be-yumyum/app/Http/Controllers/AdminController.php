<?php

namespace App\Http\Controllers;

use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;


class AdminController extends Controller
{
    public function index()
    {
        $data = User::with('roles')->whereHas('roles', function ($role) {
            $role->where('name', 'admin');
            $role->orWhere('name', 'owner');
        })->get();
        foreach ($data as $item) {
            $item->role = $item->getRoleNames()[0];
            $item->makeHidden('roles');
        }
        return response()->json($data, 200);
    }

    // update user
    public function update(Request $request, $id)
    {
        $user = User::find($id);

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

    public function show($id)
    {
        $data = User::with('roles')->whereHas('roles', function ($role) {
            $role->where('name', 'admin');
            $role->orWhere('name', 'owner');
        })->find($id);
        $data->role = $data->getRoleNames()[0];
        $data->makeHidden('roles');
        return response()->json($data, 200);
    }
}
