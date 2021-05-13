<?php

use App\Http\Controllers\categoryController;
use App\Http\Controllers\kindpostController;
use App\Http\Controllers\menuController;
use App\Http\Controllers\postsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});

Route::prefix('category')->name('category.')->group(function () {
    Route::get('',[categoryController::class,'getAll']);
    Route::delete('/delete/{id}',[categoryController::class,'destroy']);
    Route::post('',[categoryController::class,'store']);
    Route::put('/{id}',[categoryController::class,'get']);
    Route::put('/update/{id}',[categoryController::class,'update']);
});
Route::prefix('menu')->name('menu.')->group(function () {
    Route::get('',[menuController::class,'getAll']);
    Route::delete('/delete/{id}',[menuController::class,'destroy']);
    Route::post('',[menuController::class,'store']);
    Route::put('/{id}',[menuController::class,'get']);
    Route::put('/update/{id}',[menuController::class,'update']);
    Route::get('/parent/{parent}',[menuController::class,'submenu']);
    Route::put('/isparent/{id}',[menuController::class,'changeIsParent']);
});
Route::prefix('post')->name('post.')->group(function () {
    Route::get('',[postsController::class,'getAll']);
    Route::get('/search/{search}',[postsController::class,'Search']);
    Route::get('/newsposts',[postsController::class,'getnewsPost']);
    Route::get('/mostViews',[postsController::class,'getMostViews']);
    Route::get('/mostViews/{menu}',[postsController::class,'getMostViewsbyKind']);
    Route::delete('/delete/{id}',[postsController::class,'destroy']);
    Route::post('',[postsController::class,'store']);
    Route::put('/{id}',[postsController::class,'get']);
    Route::get('/comment/{id}',[postsController::class,'getCmt']);
    Route::get('/e-name/{e_name}',[postsController::class,'getWithEname']);
    Route::get('/title/{e_name}',[postsController::class,'getWithtitle']);
    Route::put('/update/{id}',[postsController::class,'update']);
    Route::get('/parent/{parent}',[postsController::class,'submenu']);
    Route::get('/views/{id}',[postsController::class,'incrView']);
    Route::get('/commentcount/{id}',[postsController::class,'getCmtCount']);
});
Route::prefix('kindposts')->name('kindposts.')->group(function () {
    Route::get('',[kindpostController::class,'getAll']);
    Route::delete('/delete/{id}',[kindpostController::class,'destroy']);
    Route::post('',[kindpostController::class,'store']);
    Route::put('/{id}',[kindpostController::class,'get']);
    Route::put('/update/{id}',[kindpostController::class,'update']);
    Route::get('/parent/{parent}',[kindpostController::class,'submenu']);
});
Route::prefix('comment')->name('comment.')->group(function () {
    Route::get('',[CommentController::class,'getAll']);
    Route::delete('/delete/{id}',[CommentController::class,'destroy']);
    Route::post('',[CommentController::class,'store']);
});
Route::post('/uploadimg',[FileController::class,'uploadImage']);
Route::get('/image',[FileController::class,'getAllImg']);
Route::delete('/image/delete/{item}',[FileController::class,'destroy']);
