<?php

namespace App\Http\Controllers;
use App\Models\kindposts;
use Illuminate\Http\Request;

class kindpostController extends Controller
{
    public function getAll(){
        $kindposts = kindposts::all();
        return response()->json($kindposts,200);
    }
    public function destroy($id){
        kindposts::destroy($id);
    }
    public function store(Request $request){
        $newkinds = new kindposts;
        $newkinds->name = $request->name;
        $newkinds->category_id = $request->cate;
        $newkinds->save();
    }
    public function get($id){
        $item=kindposts::find($id);
        return $item;
    }
    public function update(Request $request, $id){
        $newkinds = kindposts::find($id);
        $newkinds->name=$request->name;
        $newkinds->category_id = $request->cate;
        $newkinds->save();
    }
}
