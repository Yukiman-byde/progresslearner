<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('levels')->insert([
            [
                'level' => '超初級',
                'English_level' => 'lower elementary',
            ],
            [
                'level' => '初級',
                'English_level' => 'elementary',
            ],
            [
                'level' => '初中級',
                'English_level' => 'lower intermediate',
            ],
            [
                'level' => '中級',
                'English_level' => 'intermediate',
            ],
            [
                'level' => '中上級',
                'English_level' => 'upper intermediate',
            ],
        ]);
    }
}
