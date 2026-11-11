import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Routine from './pages/Routine';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  const goTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={goTo} />;
      case 'about': return <About />;
      case 'products': return <Products setCartCount={setCartCount} />;
      case 'Routine': return <Routine setCurrentPage={goTo} />;
      case 'contact': return <Contact />;
      default: return <Home setCurrentPage={goTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-luxury-black-950 text-stone-300 font-sans selection:bg-luxury-gold/30">
      <Navbar currentPage={currentPage} setCurrentPage={goTo} cartCount={cartCount} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={goTo} />
    </div>
  );
}

export default App;