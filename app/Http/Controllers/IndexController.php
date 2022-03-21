<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Youtube;
use Response;


class IndexController extends Controller
{
    public function index(Youtube $youtube){

        $youtubes = $youtube->orderBy('created_at', 'Desc')->get();

        return Inertia::render('Index/App')->with(['youtubes' => $youtubes]);
    }

    public function IFrame(Youtube $youtube){
        $youtube = $youtube->get();
        $data = ['videos' => $youtube ];
       return Response::json($data);
    }

    public function test(Youtube $youtube){
       $youtube = $youtube->all();
       return Response::json($youtube);
    }

}
