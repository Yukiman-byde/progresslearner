<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Youtube;
use App\Models\Level;
use App\Models\Category;
use App\Models\Information;

class QuizController extends Controller
{
    public function attach(Request $request, Youtube $youtube, Level $level, Category $category){
        $levels = $request['level'];

        $categories = $request['category'];

        $video = $request['video'];

        $youtube = $youtube->find($video['id']);


        foreach($levels as $value){
            //levelのidを持ってきてる
            $level = $level->where('level', $value)->first();
            //もしlevelのidがすでに存在していた場合入れない。
            if(!$youtube->levels()->find($level->id)){
                $youtube->levels()->attach($level->id);
            }
        }

        foreach($categories as $value) {
            $category = $category->where('category', $value)->first();
            if(!$youtube->categories()->find($category->id)){
                $youtube->categories()->attach($category->id);
            }
        }

        return 200;
    }

    public function length(Request $request, Youtube $youtbe, Information $Information){
         $id = $request->id;

         $start = $request->start;

         $end = $request->end;

         $input = [$id, $start, $end];

         if($Information->where('youtube_id', $id)->first()){
            $Information->where('youtube_id', $id)
                        ->update(['start_time' => $start,
                    'end_time' => $end]);

            return 200;
         }

         if($Information->where('youtube_id', $id)->first() == null){

            $Information->youtube_id = $id;

            $Information->start_time = $start;

            $Information->end_time = $end;

            $Information->save();

            return 200;
         }
    }

    public function description(Request $request, Information $information, Youtube $youtube){

        $id = $request->id;
        $information = $information->where('youtube_id', $id)->first();

        $information->description = $request->transcription;
        $information->save();
    }
}
