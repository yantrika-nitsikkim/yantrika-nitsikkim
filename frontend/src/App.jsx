import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import RegistrationPage from './landing_page/registration/RegistrationPage'
import Navbar from './landing_page/navbar/Navbar'
import Footer from './landing_page/footer/Footer'
import AboutPage from './about_page/AboutPage' // This path must match your file structure

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/register" element={<RegistrationPage />} />
=======
        <Route path="/about" element={<AboutPage />} />
>>>>>>> cf1415f8edb0f214a408aa132497d181a546fd61
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App