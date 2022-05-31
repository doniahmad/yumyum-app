<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::create([
            'price_per_km' => 2000,
            'area_radius' => 50,
            'email' => 'restoyumyum@gmail.com',
            'phone' => '+977-9876543210',
            'address' => 'Kathmandu, Nepal',
            'name' => 'YumYum Restorant',
            'logo' => 'https://res.cloudinary.com/diklqtdsg/image/upload/v1653026932/yumyum_assets/logo_vjdyoa.png',
            'coordinate_location' => '{"0":110.82114529495216,"1":-6.81068970292468,"lat":"-6.81068970292468","long":"110.82114529495216"}
            ',
            'facebook_url' => 'https://www.facebook.com/',
            'instagram_url' => 'https://www.instagram.com/',
            'twitter_url' => 'https://www.twitter.com/',
        ]);
    }
}
