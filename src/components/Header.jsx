import React from 'react'
import { Link } from 'react-router-dom'
import Weather from './Weather'
const Header = () => {
  return (
   <header className="w-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
     <div className="container mx-auto flex items-center h-20 px-6">
      <div className="logo flex-shrink-0">
        <Link to="/">
          <img src="./html.png" alt="Logo" className='w-14 h-14 hover:scale-105 transition-transform duration-300' />
        </Link>
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-12 font-['Raleway'] text-2xl">
          <li>
            <Link to="/" className="font-medium text-blue-100 hover:text-white transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cv" className="font-medium text-blue-100 hover:text-white transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white">
              My CV
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium text-blue-100 hover:text-white transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
       
       <div className="mr-4">
        <Weather />
      </div>
      {/* Social Links */}
      <div className="flex items-center space-x-4">
        <a 
          href="https://www.linkedin.com/in/mohamed-osman-7a9952331" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-100 hover:text-white transition-colors duration-300"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a 
          href="https://github.com/osman-m00" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-100 hover:text-white transition-colors duration-300"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
     </div>
   </header>
  )
}

export default Header