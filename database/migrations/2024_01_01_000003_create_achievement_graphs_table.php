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
        Schema::create('achievement_graphs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('onedrive_url')->comment('OneDrive spreadsheet URL');
            $table->enum('graph_type', ['line', 'bar', 'pie', 'area'])->default('line');
            $table->json('config')->nullable()->comment('Chart configuration options');
            $table->json('cached_data')->nullable()->comment('Cached spreadsheet data');
            $table->timestamp('last_sync')->nullable()->comment('Last time data was synced from OneDrive');
            $table->boolean('is_active')->default(true)->comment('Whether graph is visible');
            $table->integer('sort_order')->default(0)->comment('Order for displaying graphs');
            $table->timestamps();
            
            // Add indexes for performance
            $table->index('is_active');
            $table->index(['is_active', 'sort_order']);
            $table->index('graph_type');
            $table->index('last_sync');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achievement_graphs');
    }
};