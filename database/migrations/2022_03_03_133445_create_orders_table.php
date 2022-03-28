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
            $table->id();
            $table->bigInteger('user_id')->index();
            $table->string('session_id', 100);
            $table->string('token', 100);
            $table->smallInteger('status')->nullable();
            // can be New, Checkout, Paid, Failed, Shipped, Delivered, Returned, and Complete
            $table->float('tax', 8, 2)->nullable();
            $table->float('sub_total', 8, 2)->nullable();
            $table->float('shipping', 8, 2)->nullable();
            $table->float('total_price', 8, 2)->nullable();
            $table->string('name', 50);
            $table->string('surname', 50);
            $table->string('mobile', 15)->unique();
            $table->string('email', 50)->unique();
            $table->string('street', 50);
            $table->string('city', 50);
            $table->string('province', 50);
            $table->string('country', 50);
            $table->text('message')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
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
