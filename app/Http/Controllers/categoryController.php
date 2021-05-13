<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;

class categoryController extends Controller
{
    public function getAll(){
        $category = category::all();
        return response()->json($category,200);
    }
    public function destroy($id){
        category::destroy($id);
    }
    public function store(Request $request){
        $newCate = new category;
        $newCate->name = $request->name;
        $newCate->save();
    }
    public function get($id){
        $item=category::find($id);
        return $item;
    }
    public function update(Request $request, $id){
        $cate = category::find($id);
        $cate->name=$request->name;
        $cate->save();
    }

}
