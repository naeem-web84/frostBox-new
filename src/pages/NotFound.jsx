import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-2xl text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
                <p className="text-lg text-gray-500 mb-8">You might have a typo in the URL or the page has been moved.</p>
                <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">Go to Homepage</a>
            </div>
        </div>
    );
};

export default NotFound;
