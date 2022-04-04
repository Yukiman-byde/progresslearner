<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Youtube extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'thumbnail',
        'description',
        'videoId',
    ];

    public function levels(){
        return $this->belongsToMany('App\Models\Level');
    }


    public function categories(){
        return $this->belongsToMany('App\Models\Category');
    }

    public function information(){
        return $this->hasOne('App\Models\Information');
    }
}
