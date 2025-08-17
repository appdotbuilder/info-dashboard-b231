<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Presentation
 *
 * @property int $id
 * @property string $title
 * @property string $filename
 * @property string|null $description
 * @property array $slides
 * @property int $total_slides
 * @property bool $is_active
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation query()
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereFilename($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereSlides($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereTotalSlides($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Presentation active()
 * @method static \Database\Factories\PresentationFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Presentation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'filename',
        'description',
        'slides',
        'total_slides',
        'is_active',
        'sort_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'slides' => 'array',
        'is_active' => 'boolean',
        'total_slides' => 'integer',
        'sort_order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active presentations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}