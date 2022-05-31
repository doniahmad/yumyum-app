<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        $data = Setting::first();
        return response()->json($data);
    }

    public function update(Request $request)
    {

        $data = Setting::first();
        try {
            $validateData = $request->validate(
                [
                    'price_per_km' => 'numeric',
                    'area_radius' => 'numeric',
                    'email' => 'email',
                    'phone' => 'string',
                    'address' => 'string',
                    'name' => 'string|max:255',
                    'logo' => 'image|mimes:jpeg,png,jpg,gif,svg',
                    'coordinate_location' => 'string',
                    'facebook_url' => 'string',
                    'instagram_url' => 'string',
                    'twitter_url' => 'string',
                ]
            );

            if ($request->hasFile('logo')) {
                if ($data->logo == 'https://res.cloudinary.com/diklqtdsg/image/upload/v1653026932/yumyum_assets/logo_vjdyoa.png') {
                    $validateData['logo'] = CloudinaryStorage::upload($request->logo->getRealPath(), $request->logo->getClientOriginalName());
                } else {

                    $validateData['logo'] = CloudinaryStorage::replace($data->logo, $request->logo->getRealPath(), $request->logo->getClientOriginalName());
                }
            }

            $data = $data->update($validateData);
            return response()->json([
                'message' => 'Setting updated successfully',
                'data' => $data
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Setting updated failed',
                'data' => $e->getMessage()
            ]);
        }
    }
}
