<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $fillable = [
        'category',
        'English_category',
        'image'
    ];

    use HasFactory;

    public function youtubes(){
        return $this->belongsToMany('App\Models\Youtube');
    }

    public function if_category_exist($category_name, $category_English_name, $category_image){
        $category = $this->where('category', $category_name)
                    ->where('English_category', $category_English_name)
                    ->where('image', $category_image)->first();
        return $category;
    }
}
