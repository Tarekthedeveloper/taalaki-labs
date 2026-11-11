import React from 'react';

const SHOP_LINKS = [
  { key: 'products', label: 'All products' },
  { key: 'Routine', label: 'Routine finder' },
];

const COMPANY_LINKS = [
  { key: 'about', label: 'About us' },
  { key: 'contact', label: 'Contact' },
];

export default function Footer({ setCurrentPage }) {
  const year = new Date().getFullYear();

  const linkClass = 'text-stone-400 hover:text-luxury-gold transition-colors text-sm text-left';

  return (
    <footer className="bg-luxury-black-950 border-t border-luxury-black-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10 text-left">

        {/* Brand */}
        <div className="md:col-span-4 space-y-4">
          <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2" aria-label="TAALAKI home">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-serif text-luxury-black-950 font-bold text-xs">T</div>
            <span className="text-xl font-bold tracking-wider text-luxury-gold uppercase">TAALAKI</span>
          </button>
          <p className="text-xs font-light leading-relaxed max-w-xs">
            Skincare and makeup with full ingredient lists, tested formulas and no parabens or sulfates. Formulated in Geneva and Tokyo.
          </p>
        </div>

        {/* Shop */}
        <nav className="md:col-span-2 space-y-3" aria-label="Shop">
          <h4 className="text-white text-sm font-bold">Shop</h4>
          <ul className="space-y-2">
            {SHOP_LINKS.map(l => (
              <li key={l.key}>
                <button onClick={() => setCurrentPage(l.key)} className={linkClass}>{l.label}</button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav className="md:col-span-2 space-y-3" aria-label="Company">
          <h4 className="text-white text-sm font-bold">Company</h4>
          <ul className="space-y-2">
            {COMPANY_LINKS.map(l => (
              <li key={l.key}>
                <button onClick={() => setCurrentPage(l.key)} className={linkClass}>{l.label}</button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Customer care */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-white text-sm font-bold">Customer care</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:care@taalaki.app" className="hover:text-luxury-gold transition-colors">care@taalaki.app</a></li>
            <li><a href="tel:+18005550123" className="hover:text-luxury-gold transition-colors">+1 (800) 555-0123</a></li>
            <li className="text-xs font-light">Mon-Fri, 9:00-18:00 CET</li>
          </ul>
          <p className="text-xs font-light leading-relaxed pt-1">
            Free shipping over $100. 30-day returns on unopened items.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-luxury-black-900">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-500">
          <p>&copy; {year} TAALAKI. All rights reserved.</p>
          <p>Geneva · Tokyo · New York</p>
        </div>
      </div>
    </footer>
  );
}