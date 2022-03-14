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
            'category' => '食べ物',
            'English_category' => 'Food',
            ],
            [
            'category' => 'カフェ',
            'English_category' => 'Cafe',
            ],
            [
            'category' => '表現',
            'English_category' => 'Expression',
            ],
            [
            'category' => 'スラング',
            'English_category' => 'slang',
            ],
            [
            'category' => '古語',
            'English_category' => 'archaic word',
            ],
        ]);
    }
}
