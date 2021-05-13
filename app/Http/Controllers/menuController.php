<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class menuController extends Controller
{
    public function getAll(){
        $Menu = Menu::all();
        return $Menu;
    }
    public function destroy($id){
        $item = Menu::find($id);
        $equlParent = Menu::where('parent_id',$item->parent_id)->get();
        if(count($equlParent)<=1){
            Menu::Where('id',$item->parent_id)->update(['is_parent'=>false]);
        }
        Menu::destroy($id);
    }
    public function store(Request $request){
        $newCate = new Menu;
        $newCate->name = $request->name;
        $newCate->parent_id=$request->parent;
        $newCate->e_name=changeTitle($request->name);
        if($request->parent>0){
            Menu::where('id',$request->parent)->update(['is_parent'=>true]);
        }
        $newCate->save();

    }
    // public function changeIsParent($id){
    //     $newCate = Menu::where('id',$id)->get();
    //     $newCate->is_parent=true;
    //     $newCate->save();

    // }
    public function get($id){
        $item=Menu::find($id);
        return $item;
    }
    public function update(Request $request, $id){
        $cate = Menu::find($id);
        $cate->name=$request->name;
        $cate->parent_id=$request->parent;
        $cate->e_name=changeTitle($request->name);
        $cate->save();
    }
    public function submenu($parent){
        $items = menu::where('parent_id',$parent)->get();
        return $items;
    }
}
