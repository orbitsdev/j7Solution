<?php

use App\Livewire\LandingPage;
use App\Livewire\ProjectsPage;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/landing-page', LandingPage::class)->name('lading-page');
Route::get('/projects', ProjectsPage::class)->name('projects');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
