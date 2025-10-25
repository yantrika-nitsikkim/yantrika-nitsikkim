import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import Navbar from './landing_page/navbar/Navbar'
import Footer from './landing_page/footer/Footer'
import AboutPage from './about_page/AboutPage' // This path must match your file structure

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App