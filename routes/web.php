<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PegawaiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/pegawais', [PegawaiController::class, 'index'])->name('pegawai.index');
// Route Create Product
Route::get('/create', [PegawaiController::class, 'create'])->name('pegawai.create');
Route::post('/store', [PegawaiController::class, 'store'])->name('pegawai.store');
Route::post('/update', [PegawaiController::class, 'update'])->name('pegawai.update');
Route::get('/destroy/{id}', [PegawaiController::class, 'destroy'])->name('pegawai.destroy');
Route::get('/edit/{id}', [PegawaiController::class, 'edit'])->name('pegawai.edit');
Route::get('/show/{id}', [PegawaiController::class, 'show'])->name('pegawai.show');
