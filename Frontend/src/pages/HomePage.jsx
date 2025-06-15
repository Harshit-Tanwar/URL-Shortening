import React from 'react'
import UrlForm from '../component/UrlForm'

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
                <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
                <UrlForm/>
            </div>
        </div>
    )
}

export default HomePage