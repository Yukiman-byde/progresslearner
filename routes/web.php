<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\YoutubeController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\LineController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Middleware\Cors;

require __DIR__.'/auth.php';

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
    return Inertia::render('Welcome');
});
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('admin'),
//         'canRegister' => Route::has('admin.register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::controller(AuthenticatedSessionController::class)->group(function(){
    Route::get('/Admin/login', 'create');
    Route::post('/Admin/login', 'store');
    Route::post('/Admin/logout', 'destroy');
});


Route::controller(LineController::class)->group(function() {
   Route::get('/lineLogin/{provider}', 'redirectToProvider');
   Route::get('/lineLogin/{provider}/callback', 'handleCallbackProvider');
   Route::get('/logout', 'logout');
});

// Route::prefix('admin')->name('admin.')->group(function(){
//     require __DIR__.'/admin.php';
// });


Route::middleware(['auth:admin'])->prefix('admin')->group(function(){
    Route::get('/resources', [ResourceController::class, 'index'])->name('resource.index');
    Route::get('/video/quiz/{id}', [ResourceController::class, 'quiz']);
    Route::get('/info', [YoutubeController::class, 'show']);
    Route::post('/video/{videoData}', [YoutubeController::class, 'store']);
    Route::post('/category_level', [QuizController::class, 'attach']);
    Route::post('/length', [QuizController::class, 'length']);
    Route::post('/description', [QuizController::class, 'description']);
    Route::post('/update_categories', [ResourceController::class, 'update_categories']);
    Route::get('/categories', [ResourceController::class, 'categories'])->name('category');
});


Route::middleware(['auth:web,admin'])->group(function(){
    Route::get('/index', [IndexController::class, 'index'])->name('index.app');
    Route::get('/index/Iframes/{value}', [IndexController::class, 'IFrame'])->name('index.iframe');
    Route::get('/index/youtubesInfo', [IndexController::class, 'test']);
    Route::get('/index/{title}', [IndexController::class, 'detail']);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//require __DIR__.'/auth.php';



// Route::get('/practice', [ResourceController::class, 'practice']);
// Route::get('/practice2', [ResourceController::class, 'practice2']);
