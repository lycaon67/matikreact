<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AddDevicesController extends Controller
{
    public function index(Request $request)
    {
        $result = DB::table('devices')
            ->insert(
                [
                    'key' => $request['key'], 
                    'type' => $request['type'],
                ]
            );

        if($request['type'] === 'Control'){
            // foreach ($variable as $key => $value) {
            //     # code...
            // }
        }else if($request['type'] === 'Monitor'){
            
        }else if($request['type'] === 'Security'){
            
        }

        return $access != null ? "succcess" : "bogo";
        
    }
}
