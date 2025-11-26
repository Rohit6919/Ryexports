import './index.css'
import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/HeroSection';
import Whoweare from './components/Whoweare';
import Products from './components/Products';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import Header from './components/Header';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
    });
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">

          <div className="relative z-10">
            {/* <Navbar /> */}
            <Header />
            <HeroSection />
            <Whoweare />
            <Products />
            <WhyChooseUs />
            <Contact />
            <Footer />


          </div>
          // </div>
        }
      />
    </Routes>

  );
}

export default App