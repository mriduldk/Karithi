<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KharithiController extends Controller
{
    public function kharithiHome()
    {
        return view('/btr/karithi');
    }
}
