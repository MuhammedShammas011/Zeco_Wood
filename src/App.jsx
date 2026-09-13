import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MaterialIntro from './components/MaterialIntro';
import WhyZecoWood from './components/WhyZecoWood';
import Applications from './components/Applications';
import Performance from './components/Performance';
import Footer from './components/Footer';
import ProcessPage from './components/ProcessPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <MaterialIntro />
      <WhyZecoWood />
      <Applications />
      <Performance />
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/about';

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}
