<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Youtube;
use Response;
use App\Models\Level;


class IndexController extends Controller
{
    public function index(Youtube $youtube){

        $youtubes = $youtube->orderBy('created_at', 'Desc')->limit(8)->get();

        return Inertia::render('Index/App')->with(['youtubes' => $youtubes]);
    }

    public function IFrame(Youtube $youtube, $value, Level $level){

        $level_value = intval($value);

        switch($level_value){
            case 1:
            $youtubes = $level->find($level_value)->youtubes()->get();
            break;
            case 3:
                $youtubes = $level->find($level_value)->youtubes()->get();
            break;
            case 5:
                $youtubes = $level->find($level_value)->youtubes()->get();
            break;
        }

        $data = ['videos' => $youtubes];

       return Response::json($data);
    }

    public function test(Youtube $youtube){
       $youtube = $youtube->find(4);
       $information = $youtube->information()->first();
       return Response::json([
           'youtube' => $youtube,
           'infomation' => $information,
        ]);
    }

    public function detail($title, Youtube $youtube){
       $youtube = $youtube->where('name', $title)->first();
       $categories = $youtube->categories()->get();
       $levels = $youtube->levels()->get();

        return Inertia::render('Detail/App')->with(['youtubes' => $youtube, 'categories' => $categories, 'levels' => $levels]);
    }

}
