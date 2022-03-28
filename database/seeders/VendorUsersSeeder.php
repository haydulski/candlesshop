<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VendorUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $db = DB::table('users');
        $faker = Factory::create();
        $db->where('vendor', '=', '1')->delete();
        $vendorUsers = [];

        for ($i = 0; $i < 5; $i++) {
            $vendorUsers[] = [
                'name' => $faker->firstName(),
                'surname' => $faker->lastName(),
                'email' => $faker->email(),
                'mobile' => $faker->phoneNumber(),
                'vendor' => 1,
                'password' => '12345678',
                'created_at' => Carbon::now()
            ];
        }
        $db->insert($vendorUsers);
    }
}
