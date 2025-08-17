<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ContentItem
 *
 * @property int $id
 * @property string $title
 * @property string|null $content
 * @property string $type
 * @property string|null $image_url
 * @property int $sort_order
 * @property bool $is_active
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContentItem active()
 * @method static \Database\Factories\ContentItemFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class ContentItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'content',
        'type',
        'image_url',
        'sort_order',
        'is_active',
        'description',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active content items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}