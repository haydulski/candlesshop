<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('order_id')->index();
            $table->bigInteger('user_id')->index();
            $table->smallInteger('transaction_type')->default(0);
            // Cash On Delivery,Transfer, PayPal.
            $table->smallInteger('status')->default(0);
            // New, Cancelled, Failed, Pending, Rejected, and Success.
            $table->text('content');
            $table->timestamps();

            $table->foreign('order_id')->references('id')->on('orders');
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
        Schema::dropIfExists('transactions');
    }
}
