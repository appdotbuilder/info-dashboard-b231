import React from 'react';
import AppLayout from '@/components/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface AchievementGraph {
    id: number;
    title: string;
    description?: string;
    graph_type: 'line' | 'bar' | 'pie' | 'area';
    onedrive_url: string;
    last_sync?: string;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    achievementGraphs: {
        data: AchievementGraph[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Achievement Graphs',
        href: '/admin/achievement-graphs',
    },
];

export default function AchievementGraphsIndex({ achievementGraphs }: Props) {
    const getGraphIcon = (type: string) => {
        switch (type) {
            case 'line': return '📈';
            case 'bar': return '📊';
            case 'pie': return '🥧';
            case 'area': return '📉';
            default: return '📊';
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Achievement Graphs - Admin" />
            
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            📈 Achievement Graphs
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Manage OneDrive-powered data visualizations
                        </p>
                    </div>
                    <Link
                        href="/admin/achievement-graphs/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200"
                    >
                        + New Graph
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                                <span className="text-2xl">📊</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Graphs</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{achievementGraphs.total}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                                <span className="text-2xl">✅</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {achievementGraphs.data.filter(graph => graph.is_active).length}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                                <span className="text-2xl">🔄</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Synced Today</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {achievementGraphs.data.filter(graph => 
                                        graph.last_sync && new Date(graph.last_sync).toDateString() === new Date().toDateString()
                                    ).length}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                                <span className="text-2xl">📉</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Chart Types</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {new Set(achievementGraphs.data.map(g => g.graph_type)).size}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Graphs Grid */}
                {achievementGraphs.data.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {achievementGraphs.data.map((graph) => (
                            <div
                                key={graph.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="text-2xl mr-3">
                                                {getGraphIcon(graph.graph_type)}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                                    {graph.title}
                                                </h3>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    graph.graph_type === 'line' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200' :
                                                    graph.graph_type === 'bar' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200' :
                                                    graph.graph_type === 'pie' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-200' :
                                                    'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-200'
                                                }`}>
                                                    {graph.graph_type}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            graph.is_active 
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200'
                                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                            {graph.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>

                                    {graph.description && (
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            {graph.description}
                                        </p>
                                    )}

                                    <div className="aspect-video bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 rounded-lg flex items-center justify-center border border-gray-100 dark:border-gray-600 mb-4">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">
                                                {getGraphIcon(graph.graph_type)}
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                                                {graph.graph_type.charAt(0).toUpperCase() + graph.graph_type.slice(1)} Chart Preview
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500 dark:text-gray-400">Last Sync:</span>
                                            <span className="text-gray-900 dark:text-white">
                                                {graph.last_sync 
                                                    ? new Date(graph.last_sync).toLocaleDateString() 
                                                    : 'Never'
                                                }
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500 dark:text-gray-400">Sort Order:</span>
                                            <span className="text-gray-900 dark:text-white">{graph.sort_order}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Link
                                                href={`/admin/achievement-graphs/${graph.id}`}
                                                className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                href={`/admin/achievement-graphs/${graph.id}/edit`}
                                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium"
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                        <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium">
                                            🔄 Sync Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📈</div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            No achievement graphs yet
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                            Create your first graph to start visualizing data from OneDrive spreadsheets.
                        </p>
                        <Link
                            href="/admin/achievement-graphs/create"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                        >
                            + Create Achievement Graph
                        </Link>
                    </div>
                )}

                {/* Pagination */}
                {achievementGraphs.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                            Showing {((achievementGraphs.current_page - 1) * achievementGraphs.per_page) + 1} to{' '}
                            {Math.min(achievementGraphs.current_page * achievementGraphs.per_page, achievementGraphs.total)} of{' '}
                            {achievementGraphs.total} results
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}