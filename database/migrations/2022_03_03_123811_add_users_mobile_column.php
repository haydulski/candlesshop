<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUsersMobileColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table(
            'users',
            function (Blueprint $table) {

                $table->string('surname', 50)->after('name');
                $table->string('mobile', 15)->unique()->after('surname');
                $table->tinyInteger('vendor')->default(0)->after('mobile');
            }

        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {

            $table->dropColumn('surname');
            $table->dropColumn('mobile');
            $table->dropColumn('vendor');
        });
    }
}
