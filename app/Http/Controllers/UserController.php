<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function getAll(){
        $data = User::all();
        return $data;
    }
    public function getOne($id){
        $data = User::find($id);
    }

}

