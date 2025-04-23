<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('edit-post', function () {
        return Inertia::render('edit-post', [
            'tags' => \App\Models\Tag::all(),
            'posts' => \App\Models\Post::all(),
        ]);
    })->name('post.edit');

    Route::get('post/{title}', function () {
        $title = request()->title;
        return Inertia::render('post', [
            'post' => \App\Models\Post::where('title', $title)->first(),
        ]);
    })->name('post.show');

    Route::post('posts', function (\Illuminate\Http\Request $request) {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'tag' => 'required|string|max:255',
        ]);

        $tag = new \App\Models\Post();
        $tag->title = $request->input('title');
        $tag->content = $request->input('content');
        $tag->time_to_read = round(count(explode(" ", $request->input('content'))) / 200);
        $tag->published = false;
        $tag->save();
    })->name('post.store');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
