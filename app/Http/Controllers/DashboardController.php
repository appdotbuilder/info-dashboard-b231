<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AchievementGraph;
use App\Models\ContentItem;
use App\Models\Presentation;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the main dashboard.
     */
    public function index()
    {
        // Get active content items sorted by order
        $contentItems = ContentItem::active()
            ->orderBy('sort_order')
            ->orderBy('created_at')
            ->get();

        // Get active achievement graphs sorted by order
        $achievementGraphs = AchievementGraph::active()
            ->orderBy('sort_order')
            ->orderBy('created_at')
            ->get();

        // Get active presentations sorted by order
        $presentations = Presentation::active()
            ->orderBy('sort_order')
            ->orderBy('created_at')
            ->get();

        return Inertia::render('dashboard', [
            'contentItems' => $contentItems,
            'achievementGraphs' => $achievementGraphs,
            'presentations' => $presentations,
        ]);
    }
}