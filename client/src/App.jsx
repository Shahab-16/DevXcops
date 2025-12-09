import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import Team from './pages/Team'
import ServiceDetail from './components/service_components/ServiceDetail';
import ProfilePage from './pages/ProfilePage';
function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<ServiceDetail />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:workName" element={<WorkDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/team" element={<Team />} />
         <Route path="/team/:name" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
