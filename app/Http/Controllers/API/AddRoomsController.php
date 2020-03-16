<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class AddRoomsController extends Controller
{
    public function index(Request $request)
    {
        $access = DB::table('rooms')
        ->insert(
            ['houseid' => $request['houseId'], 'name' => $request['roomName']]
        );

        return $access != null ? "succcess" : "bogo";
        
    }
}
