<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class ShowHouseDevicesController extends Controller
{
    public function index($id)
    {
        $devicesALL = array();
        $devices = DB::table('houses')
                    ->join('devices', 'devices.houseid', '=', 'houses.id')
                    ->where('houses.id', '=', $id)
                    ->select('devices.*')
                    ->get();
        foreach ($devices as $data) {
            $devicedata = $data;
            if($data->type === 'control'){
                $controlsData = DB::table('devices')
                    ->join('controls', 'controls.deviceid', '=', 'devices.id')
                    ->select('controls.id', 'controls.status', 'controls.roomid', 'controls.name')
                    ->where('devices.id', '=', $data->id)
                    ->get(); 

                $controlsCount = DB::table('devices')
                    ->join('controls', 'controls.deviceid', '=', 'devices.id')
                    ->select('controls.id', 'controls.status', 'controls.roomid', 'controls.name')
                    ->where('devices.id', '=', $data->id)
                    ->count(); 
                foreach ($controlsData as $item) {
                    $roomdata = DB::table('rooms')
                                ->select('rooms.name')
                                ->where('rooms.id', '=', $item->roomid)
                                ->get();
                    $item->rooms = $roomdata;
                }
                $devicedata->controls = $controlsData;
                $devicedata->controlsCount = $controlsCount;
            }else if($data->type === 'monitor'){                   
                $monitorsData = DB::table('devices')
                    ->join('monitors', 'monitors.deviceid', '=', 'devices.id')
                    ->select(
                        'monitors.id', 
                        'monitors.roomid', 
                        'monitors.temperature', 
                        'monitors.humidity')
                    ->where('devices.id', '=', $data->id)
                    ->get();                
                $devicedata->monitors = $monitorsData;
            }else if($data->type === 'security'){
                $securitiesData = DB::table('devices')
                    ->join('securities', 'securities.deviceid', '=', 'devices.id')
                    ->select(
                        'securities.id', 
                        'securities.roomid', 
                        'securities.doorstatus', 
                        'securities.doorchannel'
                    )
                    ->where('devices.id', '=', $data->id)
                    ->get();   
                $devicedata->securities = $securitiesData;
            }
            array_push($devicesALL, $devicedata);     
        }
        return response()->json([
            "data" => $devicesALL,
        ]);
    }
}
