<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccessHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('access_houses', function (Blueprint $table) {
            $table->integer('userid')->unsigned();
            $table->integer('houseid')->unsigned();
            $table->boolean('type');
            
            $table->timestamps();
            $table->softDeletes();

            $table->primary(['userid', 'houseid']);
            $table->foreign('userid')->references('id')->on('users');
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
        Schema::dropIfExists('access_houses');
    }
}
