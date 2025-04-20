<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CreateTagController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $tag = new \App\Models\Tag();
        $tag->name = $request->input('name');
        $tag->save();

        return to_route('post.edit');
    }
}
