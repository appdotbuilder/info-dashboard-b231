import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

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
    presentation: Presentation;
    [key: string]: unknown;
}

export default function PresentationShow({ presentation }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % presentation.slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + presentation.slides.length) % presentation.slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'Escape') {
            setIsFullscreen(false);
        }
    };

    return (
        <>
            <Head title={`${presentation.title} - Presentation Viewer`} />
            
            <div 
                className={`${
                    isFullscreen 
                        ? 'fixed inset-0 z-50 bg-black' 
                        : 'min-h-screen bg-gray-100 dark:bg-gray-900'
                }`}
                onKeyDown={handleKeyPress}
                tabIndex={0}
            >
                {!isFullscreen && (
                    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {presentation.title}
                                </h1>
                                {presentation.description && (
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                                        {presentation.description}
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Slide {currentSlide + 1} of {presentation.slides.length}
                                </span>
                                <button
                                    onClick={() => window.history.back()}
                                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    ← Back
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className={`${isFullscreen ? 'h-full' : 'max-w-7xl mx-auto p-6'} flex flex-col`}>
                    {/* Main Slide Display */}
                    <div className={`${isFullscreen ? 'flex-1' : 'aspect-video'} relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6`}>
                        {/* Mock slide display */}
                        <div className="h-full w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎞️</div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    Slide {currentSlide + 1}
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                    {presentation.title}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                                    {presentation.filename}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Overlays */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
                            disabled={currentSlide === 0}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
                            disabled={currentSlide === presentation.slides.length - 1}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Fullscreen Toggle */}
                        <button
                            onClick={toggleFullscreen}
                            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded transition-all duration-200"
                        >
                            {isFullscreen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {!isFullscreen && (
                        <>
                            {/* Controls */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={prevSlide}
                                            disabled={currentSlide === 0}
                                            className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            ← Previous
                                        </button>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                                            Slide {currentSlide + 1} of {presentation.slides.length}
                                        </span>
                                        <button
                                            onClick={nextSlide}
                                            disabled={currentSlide === presentation.slides.length - 1}
                                            className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Next →
                                        </button>
                                    </div>
                                    <button
                                        onClick={toggleFullscreen}
                                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                        Fullscreen
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentSlide + 1) / presentation.slides.length) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Slide Thumbnails */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    All Slides
                                </h3>
                                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                                    {presentation.slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`aspect-video rounded-lg border-2 transition-all duration-200 ${
                                                currentSlide === index
                                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                                            }`}
                                        >
                                            <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-md flex items-center justify-center">
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Fullscreen Instructions */}
                    {isFullscreen && (
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                            <p className="text-sm">
                                Use arrow keys or space to navigate • ESC to exit fullscreen
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}