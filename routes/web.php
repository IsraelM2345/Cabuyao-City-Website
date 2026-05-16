<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ══════════════════════════════════════════════════════════════════════════════
// PUBLIC WEB PORTAL — No authentication required (citizen-facing)
// ══════════════════════════════════════════════════════════════════════════════

// --- Main Standalone Links ---
Route::get('/', function () {
    return Inertia::render('Public/Home');
})->name('home');

Route::get('/news', function () {
    return Inertia::render('Public/News');
})->name('news');

Route::get('/drrm', function () {
    return Inertia::render('Public/DRRM');
})->name('drrm');

Route::get('/faqs', function () {
    return Inertia::render('Public/FAQs');
})->name('faqs');

Route::get('/contact', function () {
    return Inertia::render('Public/Contact');
})->name('contact');

// --- Dropdown: The City ---
Route::get('/about', function () {
    return Inertia::render('Public/About');
})->name('about');

Route::get('/accomplishments', function () {
    return Inertia::render('Public/Accomplishments');
})->name('accomplishments');

Route::get('/tourism', function () {
    return Inertia::render('Public/Tourism');
})->name('tourism');

Route::get('/gallery', function () {
    return Inertia::render('Public/Gallery');
})->name('gallery');

// --- Dropdown: Government ---
Route::get('/mayor', function () {
    return Inertia::render('Public/Mayor');
})->name('mayor');

Route::get('/council', function () {
    return Inertia::render('Public/Council');
})->name('council');

Route::get('/departments', function () {
    return Inertia::render('Public/Departments');
})->name('departments');

Route::get('/transparency', function () {
    return Inertia::render('Public/Transparency');
})->name('transparency');

// --- Dropdown: E-Services ---
Route::get('/bplo', function () {
    return Inertia::render('Public/BPLO');
})->name('bplo');

Route::get('/peso', function () {
    return Inertia::render('Public/PESO');
})->name('peso');

Route::get('/registry', function () {
    return Inertia::render('Public/Registry');
})->name('registry');

Route::get('/health', function () {
    return Inertia::render('Public/Health');
})->name('health');


// ══════════════════════════════════════════════════════════════════════════════
// AUTHENTICATION — Login & Register (guest only)
// ══════════════════════════════════════════════════════════════════════════════

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::post('/register', [AuthController::class, 'register'])->name('register.submit');
Route::post('/login',    [AuthController::class, 'login'])->name('login.submit');

// ══════════════════════════════════════════════════════════════════════════════
// PROTECTED — Staff / Admin (requires authentication)
// ══════════════════════════════════════════════════════════════════════════════

Route::middleware(['auth'])->group(function () {

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Dashboard');
    })->name('dashboard');

    // Announcements
    Route::get('/announcements', function () {
        return Inertia::render('Dashboard/Announcements');
    })->name('announcements');

    // Evacuee Profiles
    Route::get('/evacuee-profiles', function () {
        return Inertia::render('Dashboard/EvacueeProfiles');
    })->name('evacuee-profiles');

    // Relief Distribution
    Route::get('/relief-distribution', function () {
        return Inertia::render('Dashboard/ReliefDistribution');
    })->name('relief-distribution');

    // Evacuation Shelters
    Route::get('/evacuation-shelters', function () {
        return Inertia::render('Dashboard/EvacuationShelters');
    })->name('evacuation-shelters');

    // System Reports
    Route::get('/system-reports', function () {
        return Inertia::render('Dashboard/SystemReports');
    })->name('system-reports');

    // User Management
    Route::get('/user-management', function () {
        return Inertia::render('Dashboard/UserManagement');
    })->name('user-management');

});