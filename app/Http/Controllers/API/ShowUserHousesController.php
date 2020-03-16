<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class ShowUserHousesController extends Controller
{
    public function index($id)
    {
        $houses = DB::table('users')
                    ->join('access_houses', 'users.id', '=', 'access_houses.userid')
                    ->join('houses', 'houses.id', '=', 'access_houses.houseid')
                    ->select('users.firstname', 'access_houses.*', 'houses.*')
                    ->where('users.id', '=', $id)
                    ->get();

        $house = array();

        foreach ($houses as $data){
            $count = DB::table('rooms')
                        ->where('houseid', '=', $data->houseid)
                        ->count();

            $rooms = DB::table('rooms')
                        ->where('houseid', '=', $data->houseid)
                        ->select('rooms.id', 'rooms.name')
                        ->get();

            $housedata = $data;
            $housedata->count = $count;
            $housedata->rooms = $rooms;
            array_push($house, $housedata);            
        }

        return response()->json(["data" => $house]);
        
    }
}
