import React, { useState } from 'react';

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'products', label: 'Products' },
  { key: 'Routine', label: 'Routine Finder' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, setCurrentPage, cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-luxury-black-950/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-luxury-black-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <button className="flex items-center space-x-2" onClick={() => handleNavigate('home')} aria-label="TAALAKI home">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-serif text-luxury-black-950 font-bold text-xs shadow-lg">T</div>
          <span className="text-xl font-bold tracking-wider text-luxury-gold uppercase">TAALAKI</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {NAV.map(item => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.key)}
              aria-current={currentPage === item.key ? 'page' : undefined}
              className={`pb-1 border-b-2 transition-all ${
                currentPage === item.key
                  ? 'border-luxury-gold text-luxury-gold'
                  : 'border-transparent text-stone-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bag + mobile menu button */}
        <div className="flex items-center space-x-5">
          <button
            className="relative hover:scale-105 transition-transform text-stone-200"
            onClick={() => handleNavigate('products')}
            aria-label={`Shopping bag, ${cartCount} items`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 7h12l1 13H5L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-luxury-gold text-luxury-black-950 text-[10px] font-bold rounded-full h-4 min-w-[1rem] px-1 flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-luxury-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-luxury-black-900 border-t border-luxury-black-800 px-6 py-4 flex flex-col text-sm">
          {NAV.map((item, i) => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.key)}
              className={`text-left py-3 hover:text-luxury-gold ${
                currentPage === item.key ? 'text-luxury-gold' : 'text-stone-300'
              } ${i < NAV.length - 1 ? 'border-b border-luxury-black-800' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}