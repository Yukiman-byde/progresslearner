<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            DB::table('quizzes')->insert([
                'video_id' => 1,
                'quiz' => 'test',
                'choice1' => 'test',
                'choice2' => 'test',
                'choice3' => 'test',
                'right_number' =>  1,
                'total_number' => 1
            ]);
    }
}
