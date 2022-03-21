<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResourceRequest;
use App\Http\Requests\UpdateResourceRequest;
use App\Models\Resource;
use App\Models\Youtube;
use App\Models\Level;
use App\Models\Category;
use App\Models\Information;
use Inertia\Inertia;
use Response;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Resource/Index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreResourceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreResourceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function show(Resource $resource)
    {
        //
    }

    public function categories(Category $category)
    {
      return Inertia::render('Resource/Category');
    }

    public function update_categories(StoreResourceRequest $request, Category $category){

        $result = $category->if_category_exist($request->category, $request->English_category, $request->image);

        if($result == null) {
            $category->category = $request->category;

            $category->English_category = $request->English_category;

            $category->image = $request->image;

            $category->save();
        } else{
            $message = "This category has been already set up";
            return Response::json( $message );
        }

        return 200;
    }

    public function quiz($id, Youtube $youtube, Level $level, Category $category){
        $youtube = $youtube->where('videoId', $id)->first();
        $levels = $level->get();
        $categories = $category->get();
        return Inertia::render('Resource/Quiz')->with(['video' => $youtube, 'levels' => $levels, 'categories' => $categories]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function edit(Resource $resource)
    {
        //
    }

    public function practice(){
        return Inertia::render('Resource/Practice');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateResourceRequest  $request
     * @param  \App\Models\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateResourceRequest $request, Resource $resource)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resource $resource)
    {
        //
    }
}
