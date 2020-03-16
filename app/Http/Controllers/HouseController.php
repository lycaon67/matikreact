<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('users')
            ->select('users.*')
            ->get();
        return response()->json([
            'data' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $result = DB::table('houses')->insert(['name' => $request['houseName']]);
        $find = DB::table('houses')->where('houses.name', '=', $request['houseName'])->get();
        $access = DB::table('access_houses')
                    ->insert(
                        ['userid' => $request['userId'], 'houseid' => $find[0]->id, 'type' => 1]
                    );
        return "success";

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $users = DB::table('users')
                    ->join('access_houses', 'users.id', '=', 'access_houses.userid')
                    ->join('houses', 'houses.id', '=', 'access_houses.houseid')
                    ->select('users.firstname', 'access_houses.*', 'houses.*')
                    ->where('users.id', '=', $id)
                    ->get();
                    
        $house = array();
        
        foreach ($users as $data){
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
