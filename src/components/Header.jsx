import React from 'react'

const Header = () => {
  return (
   <header className="w-full border-blue-200 bg-blue-400">
   <div className="container mx-auto flex items-center">
    <div className="logo flex-shrink-0">
        <img src="./html.png" alt="Logo" className='w-14 h-14' />
    </div>
    <nav className="flex-1 flex justify-center">
      <ul className="flex space-x-18 font-['Raleway'] text-3xl">
        <li><a href="./" className="font-medium transition-all duration-300 hover:text-white hover:border-b-2 hover:border-white">Home</a></li>
        <li><a href="./" className="font-medium transition-all duration-300 hover:text-white hover:border-b-2 hover:border-white">Projects</a></li>
        <li><a href="./" className="font-medium transition-all duration-300 hover:text-white hover:border-b-2 hover:border-white">About</a></li>
      </ul>
    </nav>
    </div>
   </header>
  )
}

export default Header