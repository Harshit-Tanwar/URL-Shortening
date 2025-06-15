import React from 'react'
import UrlForm from '../component/UrlForm'
import UserUrl from '../component/UserUrl'

const Dashboard = () => {
  return (
     <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white -mt-30 p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
                <UrlForm/>
                <UserUrl/>
            </div>
        </div>
  )
}

export default Dashboard