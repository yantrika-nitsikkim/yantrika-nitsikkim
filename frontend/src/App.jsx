import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import Navbar from './landing_page/Navbar'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
