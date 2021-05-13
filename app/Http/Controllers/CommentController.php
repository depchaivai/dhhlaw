<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\comments;

class CommentController extends Controller
{
    public function getAll(){
        $comment = comments::all();
        return $comment;
    }
    public function destroy($id){
        comments::destroy($id);
    }
    public function store(Request $request){
        $newCM = new comments;
        $newCM->name = $request->Cname;
        $newCM->content = $request->content;
        $newCM->email = $request->email;
        $newCM->posts_id = $request->post_id;
        $newCM->save();
    }
    public function changeIsParent($id){
        $newCate = comments::where('id',$id)->get();
        $newCate->is_parent=true;
        $newCate->save();

    }
    public function get($id){
        $item=comments::find($id);
        return $item;
    }

}
