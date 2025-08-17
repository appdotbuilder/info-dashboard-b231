<?php

namespace Database\Factories;

use App\Models\AchievementGraph;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AchievementGraph>
 */
class AchievementGraphFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\AchievementGraph>
     */
    protected $model = AchievementGraph::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $graphType = $this->faker->randomElement(['line', 'bar', 'pie', 'area']);
        
        // Generate mock data for the graph
        $mockData = $this->generateMockData($graphType);
        
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->sentence(8),
            'onedrive_url' => 'https://onedrive.com/sample-spreadsheet-' . $this->faker->uuid,
            'graph_type' => $graphType,
            'config' => [
                'colors' => ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'],
                'legend' => $this->faker->boolean(),
                'grid' => $this->faker->boolean(),
                'animation' => $this->faker->boolean(80),
            ],
            'cached_data' => $mockData,
            'last_sync' => $this->faker->dateTimeBetween('-1 week', 'now'),
            'is_active' => $this->faker->boolean(85), // 85% chance of being active
            'sort_order' => $this->faker->numberBetween(0, 100),
        ];
    }

    /**
     * Generate mock data based on graph type.
     */
    protected function generateMockData(string $type): array
    {
        switch ($type) {
            case 'line':
            case 'area':
                return [
                    'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    'datasets' => [
                        [
                            'label' => 'Performance',
                            'data' => [
                                $this->faker->numberBetween(10, 100),
                                $this->faker->numberBetween(10, 100),
                                $this->faker->numberBetween(10, 100),
                                $this->faker->numberBetween(10, 100),
                                $this->faker->numberBetween(10, 100),
                                $this->faker->numberBetween(10, 100),
                            ]
                        ]
                    ]
                ];
            
            case 'bar':
                return [
                    'labels' => ['Q1', 'Q2', 'Q3', 'Q4'],
                    'datasets' => [
                        [
                            'label' => 'Sales',
                            'data' => [
                                $this->faker->numberBetween(1000, 5000),
                                $this->faker->numberBetween(1000, 5000),
                                $this->faker->numberBetween(1000, 5000),
                                $this->faker->numberBetween(1000, 5000),
                            ]
                        ]
                    ]
                ];
            
            case 'pie':
                return [
                    'labels' => ['Desktop', 'Mobile', 'Tablet'],
                    'data' => [
                        $this->faker->numberBetween(30, 60),
                        $this->faker->numberBetween(25, 50),
                        $this->faker->numberBetween(10, 25),
                    ]
                ];
            
            default:
                return [];
        }
    }

    /**
     * Indicate that the graph is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => true,
        ]);
    }

    /**
     * Indicate that the graph is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }

    /**
     * Create a graph of a specific type.
     */
    public function ofType(string $type): static
    {
        return $this->state(function (array $attributes) use ($type) {
            return [
                'graph_type' => $type,
                'cached_data' => $this->generateMockData($type),
            ];
        });
    }
}