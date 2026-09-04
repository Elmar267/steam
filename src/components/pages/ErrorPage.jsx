import React from 'react'
import { Link } from 'react-router'

function ErrorPage() {
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#171d25] text-white">
            <h1 className="text-8xl font-bold text-[#66c0f4]">404</h1>
            <h2 className="text-3xl font-semibold mt-5">Page Not Found</h2>
            <p className="text-gray-400 text-2xl mt-3">The page you are looking for does not exist.</p>

            <Link to="/" className="mt-6 bg-[#1a9fff] hover:bg-[#66c0f4] px-6 py-3 rounded text-white" >
                Back to Home
            </Link>
        </div>
    )
}

export default ErrorPage