<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePresentationRequest;
use App\Http\Requests\UpdatePresentationRequest;
use App\Models\Presentation;
use Inertia\Inertia;

class PresentationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $presentations = Presentation::orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        
        return Inertia::render('admin/presentations/index', [
            'presentations' => $presentations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/presentations/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePresentationRequest $request)
    {
        $presentation = Presentation::create($request->validated());

        return redirect()->route('presentations.index')
            ->with('success', 'Presentation created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Presentation $presentation)
    {
        return Inertia::render('presentations/show', [
            'presentation' => $presentation
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Presentation $presentation)
    {
        return Inertia::render('admin/presentations/edit', [
            'presentation' => $presentation
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StorePresentationRequest $request, Presentation $presentation)
    {
        $presentation->update($request->validated());

        return redirect()->route('presentations.show', $presentation)
            ->with('success', 'Presentation updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Presentation $presentation)
    {
        $presentation->delete();

        return redirect()->route('presentations.index')
            ->with('success', 'Presentation deleted successfully.');
    }
}