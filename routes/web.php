<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\YoutubeController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\LineController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::controller(LineController::class)->group(function() {
   Route::get('/lineLogin/{provider}', 'redirectToProvider');
   Route::get('/lineLogin/{provider}/callback', 'handleCallbackProvider');
   Route::get('/logout', 'logout');
});


Route::middleware('auth')->prefix('admin')->group(function(){
    Route::get('/resources', [ResourceController::class, 'index'])->name('resource.index');
    Route::get('/video/quiz/{id}', [ResourceController::class, 'quiz']);
    Route::get('/info', [YoutubeController::class, 'show']);
    Route::post('/video/{videoData}', [YoutubeController::class, 'store']);
    Route::post('/category_level', [QuizController::class, 'attach']);
    Route::post('/length', [QuizController::class, 'length']);
    Route::post('/description', [QuizController::class, 'description']);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
