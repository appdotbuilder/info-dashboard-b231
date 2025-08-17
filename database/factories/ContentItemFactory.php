<?php

namespace Database\Factories;

use App\Models\ContentItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContentItem>
 */
class ContentItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\ContentItem>
     */
    protected $model = ContentItem::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = $this->faker->randomElement(['text', 'image']);
        
        return [
            'title' => $this->faker->sentence(3),
            'content' => $type === 'text' ? $this->faker->paragraphs(2, true) : null,
            'type' => $type,
            'image_url' => $type === 'image' ? $this->faker->imageUrl(640, 480, 'business') : null,
            'sort_order' => $this->faker->numberBetween(0, 100),
            'is_active' => $this->faker->boolean(80), // 80% chance of being active
            'description' => $this->faker->sentence(),
        ];
    }

    /**
     * Indicate that the content item is a text type.
     */
    public function text(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'text',
            'content' => $this->faker->paragraphs(3, true),
            'image_url' => null,
        ]);
    }

    /**
     * Indicate that the content item is an image type.
     */
    public function image(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'image',
            'content' => null,
            'image_url' => $this->faker->imageUrl(800, 600, 'business'),
        ]);
    }

    /**
     * Indicate that the content item is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => true,
        ]);
    }

    /**
     * Indicate that the content item is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}