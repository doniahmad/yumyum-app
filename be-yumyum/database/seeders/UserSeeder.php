<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use TaylorNetwork\UsernameGenerator\Generator;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fields = [
            'name' => 'Yuda Angasara',
            'email' => 'yidayudsaia@gmail.com',
            'password' => bcrypt('12345678'),
            'contact' => '0812-345-67890',
            'address' => 'Jl. Raya Kedungkandang No.1, Kedungkandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65145',
            'image' => 'https://res.cloudinary.com/diklqtdsg/image/upload/v1653280959/yumyum_assets/person_dvp4we.svg',
        ];

        $generator = new Generator();

        $fields['username'] = $generator->generate($fields['name']);

        $user = User::create($fields);

        $user->assignRole('owner');
    }
}
