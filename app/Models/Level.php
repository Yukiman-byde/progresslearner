<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use HasFactory;

    public function youtubes(){
        return $this->belongsToMany('App\Models\Youtube');
    }

    public function distinction($value, $youtube){
        $level = intval($value);
        $collection = $this->filter(function($value, $key) use($level){

        dd($value);

        });
        dd($collection->toArray());
    }
}
