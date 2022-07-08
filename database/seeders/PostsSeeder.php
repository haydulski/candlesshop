<?php

namespace Database\Seeders;

use App\Models\Post;
use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::truncate();

        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $newPost = [];
            $newPost = [
                'title' => $faker->sentence(3, true),
                'body' => $faker->sentence(),
                'created_at' => Carbon::now(),
            ];
            Post::create($newPost);
        }
    }
}
