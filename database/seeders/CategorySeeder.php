<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Faker\Factory;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $db = DB::table('category');
        $db->truncate();
        $names = ['Floral', 'Oriental', 'Woody', 'Fresh'];
        $cats = [];
        foreach ($names as $name) {
            $cats[] = [
                'parent_category' => null,
                'name' => $name,
                'slug' => strtolower($name) . '-category',
                'desc' => $faker->paragraph(1, true),
                'created_at' => Carbon::now()
            ];
        };

        $db->insert($cats);
    }
}
