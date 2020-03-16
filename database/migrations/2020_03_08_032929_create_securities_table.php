<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSecuritiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('securities', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('deviceid')->unsigned();
            $table->integer('roomid')->unsigned()->nullable();
            $table->boolean('doorstatus')->default(0);
            $table->timestamps();
            $table->foreign('deviceid')->references('id')->on('devices');
            $table->foreign('roomid')->references('id')->on('rooms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('securities');
    }
}
