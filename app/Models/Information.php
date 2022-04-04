<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    use HasFactory;

    protected $fillable = [
        'youtube_id',
        'start_time',
        'end_time',
        'description',
    ];

    public function Youtube(){
        return $this->belongTo('App\Models\Youtube');
    }
}
