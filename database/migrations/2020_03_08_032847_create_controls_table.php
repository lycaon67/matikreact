<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateControlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('controls', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->integer('deviceid')->unsigned();
            $table->integer('roomid')->unsigned()->nullable();
            $table->string('name');
            $table->boolean('status')->default(0);
            $table->timestamps();

            $table->primary(['id', 'deviceid']);
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
        Schema::dropIfExists('controls');
    }
}
