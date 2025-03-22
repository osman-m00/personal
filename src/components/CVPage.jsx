import React from 'react'
import Header from './Header'
const CVPage = () => {
  return (
    <>
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-gray-800">My CV</h1>
        
        <div className="w-full max-w-4xl h-[800px] shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="/MohamedOsmanResume (2).pdf"
            className="w-full h-full"
            title="CV Preview"
          />
        </div>
        
       
        <a
          href="/MohamedOsmanResume (2).pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CV
        </a>
      </div>
    </div>
    </>
  )
}

export default CVPage