<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function uploadImage(Request $request){
        if(!$request->hasFile('image')){
            return "vui lòng chọn file";
        }
        $path = $request->file('image')->store('public/img');
        return $path;
    }
    public function getAllImg(){
        $allImage = collect(Storage::disk('public')->allFiles('img'))->map(function($file) {
            return Storage::url($file);
        });
        return $allImage;
    }
    public function destroy($item){
        Storage::disk('public')->delete('img/'.$item);
    }
}
