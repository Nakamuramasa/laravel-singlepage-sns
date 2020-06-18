<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    public function articles(): BelongsToMany
    {
        return $this->belongsToMany('App\Model\Article')->withTimestamps();
    }
}
