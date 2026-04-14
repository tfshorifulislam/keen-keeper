import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#eaf3f0] via-white to-[#eaf3f0] px-4">
            
            <div className="text-center max-w-md">

                {/* Big 404 */}
                <h1 className="text-[120px] font-extrabold text-[#244D3F] leading-none animate-bounce">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-3 leading-relaxed">
                    The page you are looking for doesn’t exist or has been moved.
                    Please check the URL or go back to homepage.
                </p>

                {/* Button */}
                <button
                    onClick={() => navigate('/')}
                    className="cursor-pointer mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-full shadow-lg hover:bg-[#1d3d33] transition-all duration-300"
                >
                    Go Back Home
                </button>

                {/* Small hint */}
                <p className="text-xs text-gray-400 mt-6">
                    Error code: 404 | Invalid route
                </p>

            </div>
        </div>
    );
};

export default ErrorPage;