import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import RegistrationPage from './landing_page/registration/RegistrationPage'
import Navbar from './landing_page/navbar/Navbar'
import Footer from './landing_page/footer/Footer'
import AboutPage from './about_page/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App