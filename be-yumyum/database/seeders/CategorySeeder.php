<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'id' => 1,
                'category' => 'makanan'
            ], [
                'id' => 2,
                'category' => 'minuman'
            ], [
                'id' => 3,
                'category' => 'paket'
            ]
        ]);
    }
}
