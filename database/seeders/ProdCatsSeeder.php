<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdCatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $db = DB::table('product_categories');
        $count = DB::table('products')->count();
        $db->truncate();
        $columns = [];
        for ($i = 0; $i < $count; $i++) {
            $columns[] = [
                'product_id' => $i + 1,
                'category_id' => rand(1, 4)
            ];
        }
        $db->insert($columns);
    }
}
