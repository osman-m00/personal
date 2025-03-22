import React from 'react'

const Header = () => {
  return (
   <header className="w-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
     <div className="container mx-auto flex items-center h-20 px-6">
      <div className="logo flex-shrink-0">
        <a href="./">
          <img src="./html.png" alt="Logo" className='w-14 h-14 hover:scale-105 transition-transform duration-300' />
        </a>
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-12 font-['Raleway'] text-2xl">
          <li>
            <a href="./" className="font-medium text-blue-100 hover:text-white transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white">
              Home
            </a>
          </li>
          <li>
            <a href="./" className="font-medium text-blue-100 hover:text-white transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white">
              Projects
            </a>
          </li>
          <li>
            <a href="./" className="font-medium text-blue-100 hover:text-white transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-white">
              About
            </a>
          </li>
        </ul>
      </nav>
     </div>
   </header>
  )
}

export default Header