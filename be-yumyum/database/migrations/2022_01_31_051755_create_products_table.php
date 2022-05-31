<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id');
            $table->string('name');
            $table->string('image');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('detail')->nullable();
            $table->integer('price');
            $table->integer('sold')->default(0);
            $table->enum('discount_type', ['50%', '70%', '80%', '90%', 'custom'])->nullable();
            $table->integer('price_after_discount')->nullable();
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
        Schema::dropIfExists('products');
    }
}
