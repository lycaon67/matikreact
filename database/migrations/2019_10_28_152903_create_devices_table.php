<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('houseid')->unsigned()->nullable();
            $table->string('key')->unique();
            $table->enum('type', ['control', 'monitor', 'security']);
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('houseid')->references('id')->on('houses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('devices');
    }
}
