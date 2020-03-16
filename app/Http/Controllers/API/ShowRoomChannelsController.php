<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class ShowRoomChannelsController extends Controller
{
    public function index($id)
    {
        $controls = DB::table('channels')
                    ->where('channels.roomid', '=', $id)
                    ->select('channels.id', 'channels.name', 'channels.status')
                    ->get();

        return response()->json([
        'controls' => $controls
        ]);
    }
}
