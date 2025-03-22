import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Card from './components/Card'
import CVPage from './components/CVPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <p className="font-['Montserrat'] text-7xl text-center mt-7 text-gray-800">Welcome To My Portfolio Website</p>
              <p className="font-['Montserrat'] text-6xl text-center mt-24 text-gray-800 mb-12">Here Are Some Of My Projects</p>
              <Card />
            </>
          } />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
