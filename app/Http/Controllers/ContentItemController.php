<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContentItemRequest;
use App\Http\Requests\UpdateContentItemRequest;
use App\Models\ContentItem;
use Inertia\Inertia;

class ContentItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contentItems = ContentItem::orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        
        return Inertia::render('admin/content-items/index', [
            'contentItems' => $contentItems
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/content-items/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContentItemRequest $request)
    {
        $contentItem = ContentItem::create($request->validated());

        return redirect()->route('content-items.index')
            ->with('success', 'Content item created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ContentItem $contentItem)
    {
        return Inertia::render('admin/content-items/show', [
            'contentItem' => $contentItem
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContentItem $contentItem)
    {
        return Inertia::render('admin/content-items/edit', [
            'contentItem' => $contentItem
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContentItemRequest $request, ContentItem $contentItem)
    {
        $contentItem->update($request->validated());

        return redirect()->route('content-items.show', $contentItem)
            ->with('success', 'Content item updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContentItem $contentItem)
    {
        $contentItem->delete();

        return redirect()->route('content-items.index')
            ->with('success', 'Content item deleted successfully.');
    }
}