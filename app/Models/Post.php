<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
        'time_to_read',
        'published',
        'views',
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
