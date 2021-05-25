<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return auth::user();
});


Route::apiResource('artworks', ArtworkController::class);
Route::apiResource('artiesten', 'ArtistController');
Route::apiResource('ontleningen', RentController::class);
Route::apiResource('expires', ExpireController::class);
Route::apiResource('types', TypeController::class);
Route::apiResource('lidkaarten', SubscriptionController::class);
Route::apiResource('gebruikers', UserController::class);

Route::post('artworks/code', 'CodeController');

