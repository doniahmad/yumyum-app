<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->integer('price_per_km');
            $table->integer('area_radius');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->string('name');
            $table->string('logo');
            $table->string('coordinate_location');
            $table->string('facebook_url');
            $table->string('instagram_url');
            $table->string('twitter_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
