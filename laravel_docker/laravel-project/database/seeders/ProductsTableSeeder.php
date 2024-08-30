<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            DB::table('products')->insert([
                'image' => $faker->imageUrl(150, 150, 'product', true, 'Product ' . $index),
                'name' => $faker->word . ' ' . $index,
                'price' => $faker->randomFloat(2, 10, 100), // Price between 10 and 100
                'rating' => $faker->numberBetween(0, 5), // Rating between 0 and 5
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null, // Optional: Add null if using soft deletes
            ]);
        }
    }
}
