import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
function App() {

  return (
    <>
     <Header/>
     <p className="font-['Montserrat'] text-7xl text-center mt-7">Welcome To My Portfolio Website</p>
     <p className="font-['Montserrat'] text-6xl text-center mt-24">Here Are Some Of My Projects</p>
     <Card/>

    </>
  )
}

export default App
