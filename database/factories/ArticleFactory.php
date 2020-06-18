<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Article;
use App\User;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(),
        'body' => $faker->sentence(),
        'user_id' => function(){
            return User::all()->random();
        }
    ];
});
