<?php

namespace App\Http\Controllers;

use App\Model\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag)
    {
        return Tag::where('name', $name)->first();
    }
}
