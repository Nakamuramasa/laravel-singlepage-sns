<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Model\Tag;
use App\Model\Article;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create();
        factory(Tag::class, 10)->create();
        factory(Article::class, 20)->create();
    }
}
