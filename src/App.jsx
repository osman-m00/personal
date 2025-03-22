import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header/>
      <p className="font-['Montserrat'] text-7xl text-center mt-7 text-gray-800">Welcome To My Portfolio Website</p>
      <p className="font-['Montserrat'] text-6xl text-center mt-24 text-gray-800 mb-12">Here Are Some Of My Projects</p>
      <Card/>
    </div>
  )
}

export default App
