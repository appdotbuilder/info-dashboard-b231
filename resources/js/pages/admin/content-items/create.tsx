import React from 'react';
import AppLayout from '@/components/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Content Items',
        href: '/admin/content-items',
    },
    {
        title: 'Create',
        href: '/admin/content-items/create',
    },
];

export default function CreateContentItem() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        type: 'text',
        image_url: '',
        description: '',
        sort_order: 0,
        is_active: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/content-items');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Content Item - Admin" />
            
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        ✨ Create Content Item
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Add new dynamic content to your dashboard
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            Basic Information
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Title */}
                            <div className="lg:col-span-2">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter content title..."
                                    required
                                />
                                {errors.title && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.title}</p>}
                            </div>

                            {/* Type */}
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Content Type *
                                </label>
                                <select
                                    id="type"
                                    value={data.type}
                                    onChange={(e) => setData('type', e.target.value as 'text' | 'image')}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    required
                                >
                                    <option value="text">📝 Text Content</option>
                                    <option value="image">🖼️ Image Content</option>
                                </select>
                                {errors.type && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.type}</p>}
                            </div>

                            {/* Sort Order */}
                            <div>
                                <label htmlFor="sort_order" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Sort Order
                                </label>
                                <input
                                    type="number"
                                    id="sort_order"
                                    value={data.sort_order}
                                    onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="0"
                                    min="0"
                                />
                                {errors.sort_order && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.sort_order}</p>}
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Lower numbers appear first
                                </p>
                            </div>

                            {/* Description */}
                            <div className="lg:col-span-2">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Brief description of this content..."
                                />
                                {errors.description && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.description}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            Content Details
                        </h2>

                        {data.type === 'text' ? (
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Text Content
                                </label>
                                <textarea
                                    id="content"
                                    rows={8}
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter your content here..."
                                />
                                {errors.content && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.content}</p>}
                            </div>
                        ) : (
                            <div>
                                <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    id="image_url"
                                    value={data.image_url}
                                    onChange={(e) => setData('image_url', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="https://example.com/image.jpg"
                                />
                                {errors.image_url && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.image_url}</p>}
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Provide a direct URL to the image
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Settings */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            Settings
                        </h2>
                        
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="is_active"
                                checked={data.is_active}
                                onChange={(e) => {
                                    setData('is_active', e.target.checked as true);
                                }}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900 dark:text-white">
                                Active (visible on dashboard)
                            </label>
                        </div>
                        {errors.is_active && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.is_active}</p>}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors duration-200"
                        >
                            {processing ? 'Creating...' : '✨ Create Content Item'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}