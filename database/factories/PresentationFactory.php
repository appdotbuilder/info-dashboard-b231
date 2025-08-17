<?php

namespace Database\Factories;

use App\Models\Presentation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Presentation>
 */
class PresentationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Presentation>
     */
    protected $model = Presentation::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $slideCount = $this->faker->numberBetween(5, 20);
        $slides = [];
        
        // Generate mock slide URLs
        for ($i = 1; $i <= $slideCount; $i++) {
            $slides[] = $this->faker->imageUrl(1024, 768, 'business', true, "Slide {$i}");
        }

        return [
            'title' => $this->faker->sentence(4),
            'filename' => $this->faker->lastName() . '_Presentation.pptx',
            'description' => $this->faker->sentence(8),
            'slides' => $slides,
            'total_slides' => $slideCount,
            'is_active' => $this->faker->boolean(85), // 85% chance of being active
            'sort_order' => $this->faker->numberBetween(0, 100),
        ];
    }

    /**
     * Indicate that the presentation is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => true,
        ]);
    }

    /**
     * Indicate that the presentation is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }

    /**
     * Create a presentation with a specific number of slides.
     */
    public function withSlides(int $count): static
    {
        return $this->state(function (array $attributes) use ($count) {
            $slides = [];
            for ($i = 1; $i <= $count; $i++) {
                $slides[] = $this->faker->imageUrl(1024, 768, 'business', true, "Slide {$i}");
            }

            return [
                'slides' => $slides,
                'total_slides' => $count,
            ];
        });
    }
}