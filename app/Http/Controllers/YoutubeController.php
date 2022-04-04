<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreYoutubeRequest;
use App\Http\Requests\UpdateYoutubeRequest;
use App\Models\Youtube;
use App\Models\Information;
use Response;

class YoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(StoreYoutubeRequest $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreYoutubeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreYoutubeRequest $request, Youtube $youtube)
    {

        // $this->validate(
        //     $request,
        //     ['description' => 'required', 'string'],
        //     ['description.required' => 'Description is mandate'],
        // );

      $input = $request['video'];

      $youtube->create([
          'name' => $input['title'],
          'thumbnail' => $input['thumbnail'],
          'description' => $input['description'],
          'videoId' => $input['videoId'],
      ]);

      return response()->noContent();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function show(Youtube $youtube, Information $information)
    {
       $information = $information->latest()->first();
       $youtube = $youtube->latest()->first();

       $data = ['information' => $information,'youtube' => $youtube];

       return Response::json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function edit(Youtube $youtube)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateYoutubeRequest  $request
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateYoutubeRequest $request, Youtube $youtube)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function destroy(Youtube $youtube)
    {
        //
    }
}
