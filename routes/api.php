<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('house', 'HouseController');
// Route::resource('room', 'RoomController');
// Route::resource('channel', 'ChannelController');

//Users
//GET
Route::get('house/{id}', 'API\ShowUserHousesController@index');
Route::get('room/channel/{id}', 'API\ShowRoomChannelsController@index');
Route::get('house/device/{id}', 'API\ShowHouseDevicesController@index');

//POST
Route::post('house', 'API\AddHousesController@index');
Route::post('room', 'API\AddRoomsController@index');
Route::post('device/{deviceid}', 'API\AddDevicesController@index');



