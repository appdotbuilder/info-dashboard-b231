<?php

namespace Database\Seeders;

use App\Models\AchievementGraph;
use App\Models\ContentItem;
use App\Models\Presentation;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Create sample content items
        ContentItem::factory()->count(8)->create();
        ContentItem::factory()->text()->active()->create([
            'title' => 'Welcome to Our Dashboard',
            'content' => 'This dashboard provides comprehensive insights into our organization\'s performance metrics, achievements, and key information. Explore the various sections to discover real-time data visualizations and important updates.',
            'sort_order' => 1,
        ]);
        ContentItem::factory()->image()->active()->create([
            'title' => 'Company Overview',
            'description' => 'Visual representation of our company structure and achievements',
            'sort_order' => 2,
        ]);

        // Create sample achievement graphs
        AchievementGraph::factory()->count(6)->create();
        AchievementGraph::factory()->active()->ofType('line')->create([
            'title' => 'Monthly Sales Performance',
            'description' => 'Track our monthly sales achievements and growth trends over time',
            'sort_order' => 1,
        ]);
        AchievementGraph::factory()->active()->ofType('bar')->create([
            'title' => 'Quarterly Revenue',
            'description' => 'Compare quarterly revenue performance across different business units',
            'sort_order' => 2,
        ]);
        AchievementGraph::factory()->active()->ofType('pie')->create([
            'title' => 'Market Share Distribution',
            'description' => 'Current market share breakdown by product category',
            'sort_order' => 3,
        ]);

        // Create sample presentations
        Presentation::factory()->count(4)->create();
        Presentation::factory()->active()->withSlides(12)->create([
            'title' => 'Company Annual Report 2024',
            'filename' => 'Annual_Report_2024.pptx',
            'description' => 'Comprehensive overview of our achievements, financial performance, and strategic direction for 2024',
            'sort_order' => 1,
        ]);
        Presentation::factory()->active()->withSlides(8)->create([
            'title' => 'Product Launch Strategy',
            'filename' => 'Product_Launch_Q2_2024.pptx',
            'description' => 'Strategic presentation outlining our new product launch timeline and marketing approach',
            'sort_order' => 2,
        ]);
    }
}
