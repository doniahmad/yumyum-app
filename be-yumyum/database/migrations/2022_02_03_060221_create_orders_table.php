<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->enum('status', ['menunggu', 'diproses', 'dikirim', 'terkirim', 'dibatalkan'])->default('menunggu');
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->string('order_code')->unique();
            $table->integer('total_price');
            $table->string('image_proof'); // new
            $table->string('customer_location'); // new
            $table->integer('shipping_cost'); // new
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
        Schema::dropIfExists('orders');
    }
}
