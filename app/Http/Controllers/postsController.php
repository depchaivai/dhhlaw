<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;

class postsController extends Controller
{
    public function getAll()
    {
        $Posts = Posts::paginate(15);
        return $Posts;
    }
    public function destroy($id)
    {
        Posts::destroy($id);
    }
    public function store(Request $request)
    {
        $newPosts = new Posts;
        $newPosts->title = $request->title;
        $newPosts->e_name = 'oke-em-oi';
        $newPosts->menu = $request->menu;
        $newPosts->description = $request->des;
        $newPosts->image = $request->image;
        $newPosts->user_id = '1';
        $newPosts->kindposts_id = $request->kind;
        $newPosts->content = $request->content;
        $newPosts->hightlight = $request->hightlight;
        $newPosts->save();
    }
    public function get($id)
    {
        $item = Posts::find($id);
        return $item;
    }
    public function getWithEname($e_name)
    {
        $item = Posts::where('menu', $e_name)->paginate(15);
        return $item;
    }
    public function getWithtitle($e_name)
    {
        $item = Posts::where('e_name', $e_name)->get();
        return $item;
    }
    public function update(Request $request, $id)
    {
        $newPosts = Posts::find($id);
        $newPosts->title = $request->title;
        $newPosts->e_name = changeTitle($request->title);
        $newPosts->menu = $request->menu;
        $newPosts->description = $request->des;
        $newPosts->image = $request->image;
        $newPosts->user_id = '1';
        $newPosts->kindposts_id = $request->kind;
        $newPosts->content = $request->content;
        $newPosts->hightlight = $request->hightlight;
        $newPosts->save();
    }
    public function getCmt($id)
    {
        $cmt = Posts::find($id)->cmt;
        return $cmt;
    }

    public function incrView($id){
        $post = Posts::find($id);
        $post->views=$post->views+1;
        $post->save();
    }
    public function getCmtCount($id){
        $cmt = Posts::find($id)->cmt;
        $count = count($cmt);
        $user = Posts::find($id)->user;
        $Username = $user->name;
        return ['cmtCout'=>$count, 'username'=>$Username];
    }
    public function getnewsPost(){
        $newsposts = Posts::OrderByDesc('created_at')->take(4)->get();
        $mostViews = Posts::OrderByDesc('views')->take(2)->get();
        return ['news' => $newsposts, 'most' => $mostViews];
    }
    public function Search($search){
        $searchposts = Posts::where('title', 'LIKE', "%{$search}%")->get();

        return $searchposts;
    }
    public function getMostViewsbyKind($menu){
        $searchposts = Posts::where('menu', $menu)->OrderByDesc('views')->take(6)->get();
        return $searchposts;
    }
}
