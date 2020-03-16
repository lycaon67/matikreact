<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class AddHousesController extends Controller
{
    public function index(Request $request){
        $result = DB::table('houses')->insert(['name' => $request['houseName']]);
        $find = DB::table('houses')->where('houses.name', '=', $request['houseName'])->get();
        $access = DB::table('access_houses')
                    ->insert(
                        ['userid' => $request['userId'], 'houseid' => $find[0]->id, 'type' => 1]
                    );
        return "success";
    }
}
