<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAchievementGraphRequest;
use App\Http\Requests\UpdateAchievementGraphRequest;
use App\Models\AchievementGraph;
use Inertia\Inertia;

class AchievementGraphController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $achievementGraphs = AchievementGraph::orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        
        return Inertia::render('admin/achievement-graphs/index', [
            'achievementGraphs' => $achievementGraphs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/achievement-graphs/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAchievementGraphRequest $request)
    {
        $achievementGraph = AchievementGraph::create($request->validated());

        return redirect()->route('achievement-graphs.index')
            ->with('success', 'Achievement graph created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(AchievementGraph $achievementGraph)
    {
        return Inertia::render('admin/achievement-graphs/show', [
            'achievementGraph' => $achievementGraph
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AchievementGraph $achievementGraph)
    {
        return Inertia::render('admin/achievement-graphs/edit', [
            'achievementGraph' => $achievementGraph
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreAchievementGraphRequest $request, AchievementGraph $achievementGraph)
    {
        $achievementGraph->update($request->validated());

        return redirect()->route('achievement-graphs.show', $achievementGraph)
            ->with('success', 'Achievement graph updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AchievementGraph $achievementGraph)
    {
        $achievementGraph->delete();

        return redirect()->route('achievement-graphs.index')
            ->with('success', 'Achievement graph deleted successfully.');
    }
}