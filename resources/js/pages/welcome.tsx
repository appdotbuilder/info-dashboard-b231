import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Dashboard Information System">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 text-gray-900 lg:justify-center lg:p-8 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 dark:text-white">
                <header className="mb-8 w-full max-w-6xl">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">📊</span>
                            </div>
                            <span className="font-semibold text-lg">Dashboard IS</span>
                        </div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm"
                                >
                                    Open Dashboard →
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="w-full max-w-6xl">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="mb-6">
                            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                📊 Dashboard Information System
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
                                Powerful dashboard with real-time achievement graphs from OneDrive, dynamic content management, and interactive PowerPoint presentations
                            </p>
                        </div>
                        
                        {!auth.user && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    🚀 Start Building Your Dashboard
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="inline-flex items-center px-8 py-4 border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 rounded-xl font-semibold text-lg transition-all duration-200 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                                >
                                    👤 Sign In
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Achievement Graphs */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Real-Time Achievement Graphs</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Connect to OneDrive spreadsheets and visualize your data with beautiful, interactive charts that update automatically.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Line, Bar, Pie & Area charts</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Auto-sync from OneDrive</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Customizable styling</li>
                            </ul>
                        </div>

                        {/* Dynamic Content */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-2xl">📝</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Dynamic Content Management</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Full admin panel to manage text and image content with drag-and-drop ordering and real-time preview.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Rich text editor</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Image management</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Drag & drop ordering</li>
                            </ul>
                        </div>

                        {/* PowerPoint Presentations */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Interactive Presentations</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Upload PowerPoint presentations and display them as navigable slide shows with smooth transitions.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Slide navigation</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full-screen viewing</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multiple presentations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Screenshot/Demo Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">See Your Dashboard in Action</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">
                                Experience a comprehensive information system designed for modern organizations
                            </p>
                        </div>
                        
                        {/* Mock Dashboard Preview */}
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">📊 Monthly Performance</h4>
                                        <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg flex items-end justify-around p-4">
                                            <div className="w-8 bg-blue-500 rounded-t" style={{height: '60%'}}></div>
                                            <div className="w-8 bg-indigo-500 rounded-t" style={{height: '80%'}}></div>
                                            <div className="w-8 bg-purple-500 rounded-t" style={{height: '45%'}}></div>
                                            <div className="w-8 bg-pink-500 rounded-t" style={{height: '90%'}}></div>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">📝 Latest Updates</h4>
                                        <div className="space-y-2">
                                            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
                                            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/5"></div>
                                            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">🎯 Presentation Viewer</h4>
                                    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 rounded-lg h-48 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">🖼️</div>
                                            <p className="text-gray-600 dark:text-gray-300">Interactive Slide Show</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    {!auth.user && (
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Data?</h2>
                            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                Join thousands of organizations using our dashboard to visualize achievements, manage content, and present data beautifully.
                            </p>
                            <Link
                                href={route('register')}
                                className="inline-flex items-center px-10 py-4 bg-white text-blue-600 hover:bg-gray-50 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                🎉 Get Started Free
                            </Link>
                        </div>
                    )}
                </main>

                <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>Built with ❤️ using Laravel, React & Inertia.js</p>
                </footer>
            </div>
        </>
    );
}