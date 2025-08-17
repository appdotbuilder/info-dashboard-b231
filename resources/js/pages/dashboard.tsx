import React from 'react';
import AppLayout from '@/components/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface ContentItem {
    id: number;
    title: string;
    content?: string;
    type: 'text' | 'image';
    image_url?: string;
    description?: string;
    is_active: boolean;
    sort_order: number;
}

interface AchievementGraph {
    id: number;
    title: string;
    description?: string;
    graph_type: 'line' | 'bar' | 'pie' | 'area';
    cached_data?: unknown;
    last_sync?: string;
    is_active: boolean;
    sort_order: number;
}

interface Presentation {
    id: number;
    title: string;
    filename: string;
    description?: string;
    slides: string[];
    total_slides: number;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    contentItems: ContentItem[];
    achievementGraphs: AchievementGraph[];
    presentations: Presentation[];
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ contentItems, achievementGraphs, presentations }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard Information System" />
            
            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            📊 Dashboard Information System
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Real-time insights, dynamic content, and interactive presentations
                        </p>
                    </div>
                </div>

                {/* Achievement Graphs Section */}
                {achievementGraphs && achievementGraphs.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                            📈 Achievement Graphs
                            <span className="ml-2 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                {achievementGraphs.length}
                            </span>
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {achievementGraphs.map((graph) => (
                                <div
                                    key={graph.id}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                            {graph.title}
                                        </h3>
                                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-200">
                                            {graph.graph_type}
                                        </span>
                                    </div>
                                    {graph.description && (
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            {graph.description}
                                        </p>
                                    )}
                                    
                                    {/* Mock chart visualization */}
                                    <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center border border-gray-100 dark:border-gray-600">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">
                                                {graph.graph_type === 'line' && '📈'}
                                                {graph.graph_type === 'bar' && '📊'}
                                                {graph.graph_type === 'pie' && '🥧'}
                                                {graph.graph_type === 'area' && '📉'}
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                {graph.graph_type.charAt(0).toUpperCase() + graph.graph_type.slice(1)} Chart
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                                {graph.last_sync ? `Synced: ${new Date(graph.last_sync).toLocaleDateString()}` : 'Awaiting data sync'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Dynamic Content Section */}
                {contentItems && contentItems.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                            📝 Dynamic Content
                            <span className="ml-2 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                {contentItems.length}
                            </span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {contentItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-md dark:bg-green-900 dark:text-green-200">
                                            {item.type}
                                        </span>
                                    </div>
                                    
                                    {item.description && (
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.type === 'image' && item.image_url ? (
                                        <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-3xl mb-2">🖼️</div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Image Content</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="prose prose-sm max-w-none dark:prose-invert">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                {item.content || 'No content available'}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Presentations Section */}
                {presentations && presentations.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                            🎯 PowerPoint Presentations
                            <span className="ml-2 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                {presentations.length}
                            </span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {presentations.map((presentation) => (
                                <div
                                    key={presentation.id}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                            {presentation.title}
                                        </h3>
                                        <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-md dark:bg-orange-900 dark:text-orange-200">
                                            {presentation.total_slides} slides
                                        </span>
                                    </div>
                                    
                                    {presentation.description && (
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            {presentation.description}
                                        </p>
                                    )}

                                    <div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg flex items-center justify-center border border-gray-100 dark:border-gray-600 mb-4">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">🎞️</div>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                Slide Presentation
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                                {presentation.filename}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                                        onClick={() => {
                                            // This would navigate to presentation viewer
                                            console.log('View presentation:', presentation.id);
                                        }}
                                    >
                                        View Presentation →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {(!contentItems?.length && !achievementGraphs?.length && !presentations?.length) && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📊</div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Welcome to Your Dashboard
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                            Start by adding achievement graphs, content items, or presentations to see your data come to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                                + Add Achievement Graph
                            </button>
                            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
                                + Add Content
                            </button>
                            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
                                + Upload Presentation
                            </button>
                        </div>
                    </div>
                )}

                {/* Admin Panel Access */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                🛠️ Admin Panel
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Manage content, graphs, and presentations from the admin dashboard
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="/admin/content-items"
                                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                            >
                                Content
                            </a>
                            <a
                                href="/admin/achievement-graphs"
                                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                            >
                                Graphs
                            </a>
                            <a
                                href="/admin/presentations"
                                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                            >
                                Presentations
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}