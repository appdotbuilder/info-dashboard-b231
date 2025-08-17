<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AchievementGraph
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string $onedrive_url
 * @property string $graph_type
 * @property array|null $config
 * @property array|null $cached_data
 * @property \Illuminate\Support\Carbon|null $last_sync
 * @property bool $is_active
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph query()
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereCachedData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereConfig($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereGraphType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereLastSync($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereOnedriveUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereSortOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AchievementGraph active()
 * @method static \Database\Factories\AchievementGraphFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class AchievementGraph extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'onedrive_url',
        'graph_type',
        'config',
        'cached_data',
        'last_sync',
        'is_active',
        'sort_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'config' => 'array',
        'cached_data' => 'array',
        'last_sync' => 'datetime',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active graphs.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}