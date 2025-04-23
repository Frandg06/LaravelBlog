<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasUuids;
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
