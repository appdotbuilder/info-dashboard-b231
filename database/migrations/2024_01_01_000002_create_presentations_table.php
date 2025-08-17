<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('presentations', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('filename')->comment('Original PowerPoint filename');
            $table->text('description')->nullable();
            $table->json('slides')->comment('Array of slide image URLs');
            $table->integer('total_slides')->default(0)->comment('Total number of slides');
            $table->boolean('is_active')->default(true)->comment('Whether presentation is visible');
            $table->integer('sort_order')->default(0)->comment('Order for displaying presentations');
            $table->timestamps();
            
            // Add indexes for performance
            $table->index('is_active');
            $table->index(['is_active', 'sort_order']);
            $table->index('title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('presentations');
    }
};