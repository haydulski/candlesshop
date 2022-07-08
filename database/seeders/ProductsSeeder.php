<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $db = DB::table('products');
        $db->truncate();
        $products = [];
        for ($i = 0; $i < 20; $i++) {
            $products[] = [
                'title' => $faker->sentence(3, true),
                'slug' => "product-slug-$i",
                'on_shop' => '1',
                'price' => $faker->randomNumber(3),
                'description' => $faker->paragraph(3, true),
                'stock_qty' => $faker->numberBetween(1, 10),
                'created_at' => Carbon::now(),
            ];
        }

        $db->insert($products);
    }
}
