<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        'name',
    ];

    public $incrementing = false;
    protected $keyType = 'string';

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
