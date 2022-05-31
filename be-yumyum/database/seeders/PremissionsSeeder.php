<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PremissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // app()[\Spatie\Permission\PremissionRegistrar::class]->forgetCachedPermissions();

        $arrayPremissionName = [
            // product
            "access product",
            // order
            "access order",
            // admin
            "access admin", "create admin",
            // owner
            'access owner', 'update owner',
        ];

        $premission = collect($arrayPremissionName)->map(function ($premission) {
            return ['name' => $premission, 'guard_name' => "web"];
        });

        Permission::insert($premission->toArray());

        // create role
        Role::create(['name' => 'owner'])->givePermissionTo($arrayPremissionName);
        Role::create(['name' => 'admin'])->givePermissionTo('access product', 'access order', 'access admin');
        Role::create(['name' => 'user'])->givePermissionTo('access product', 'access order');
    }
}
