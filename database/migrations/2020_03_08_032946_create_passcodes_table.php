<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePasscodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passcodes', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('securitiesid')->unsigned();
            $table->string('passcode');
            $table->enum('type', ['card', 'tag', 'keypad']);
            $table->timestamps();
            $table->foreign('securitiesid')->references('id')->on('securities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passcodes');
    }
}
