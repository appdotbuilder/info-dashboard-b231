<?php

use App\Http\Controllers\AchievementGraphController;
use App\Http\Controllers\ContentItemController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PresentationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Main dashboard - replace welcome page with dashboard functionality
Route::get('/', [DashboardController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard route (same as home but for authenticated users)
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Admin panel routes for content management
    Route::prefix('admin')->group(function () {
        // Content Items Management
        Route::resource('content-items', ContentItemController::class);
        
        // Presentations Management
        Route::resource('presentations', PresentationController::class);
        
        // Achievement Graphs Management
        Route::resource('achievement-graphs', AchievementGraphController::class);
    });
    
    // Public presentation viewer (for non-admin users)
    Route::get('presentations/{presentation}', [PresentationController::class, 'show'])
        ->name('presentations.view')
        ->withoutMiddleware(['auth', 'verified']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
