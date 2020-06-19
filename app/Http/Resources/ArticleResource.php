<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'path' => $this->path,
            'title' => $this->title,
            'body' => $this->body,
            'created_at' => $this->created_at->format('Y/m/d H:i'),
            'user' => $this->user->name,
        ];
    }
}
