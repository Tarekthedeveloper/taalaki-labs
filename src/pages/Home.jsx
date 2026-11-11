import React from 'react';
import heroCream from '../assets/hero-cream.jpg';
import serumElixir from '../assets/serum-elixir.jpg';
import paletteMetallic from '../assets/palette-metallic.jpg';
import heritageLab from '../assets/heritage-lab.jpg';

export default function Home({ setCurrentPage }) {
  return (
    <div className="bg-luxury-pitch text-stone-300 font-sans selection:bg-luxury-gold/30 space-y-28 pb-24">

      {/* 1. HERO SECTION */}
      <div className="animate-fadeUp max-w-6xl mx-auto px-6 pt-12 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left column: Content Text */}
          <div className="text-left space-y-6">
            <div className="flex items-center justify-start space-x-2 text-luxury-gold">
              <span className="text-sm">✦</span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium">LATEST ARRIVALS</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-wide">
              Discover Your <br />
              <span className="bg-gradient-to-r from-[#FFFDF0] via-[#D4AF37] to-[#AA7C11] bg-clip-text text-transparent">True Beauty</span>
            </h1>

            <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-md font-light tracking-wide">
              We present a luxurious collection of cosmetic formulas sourced from globally acclaimed labs. Uncompromised quality, pristine pricing guidelines, and premium delivery vectors direct to your home.
            </p>

            <div className="flex items-center justify-start space-x-4 pt-4">
              <button
                onClick={() => setCurrentPage('products')}
                className="bg-luxury-gold text-[#0A0A0A] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-luxury-gold/10 flex items-center space-x-2"
              >
                <span>Shop Now</span>
                <span>→</span>
              </button>

              <button
                onClick={() => setCurrentPage('products')}
                className="border border-luxury-gold text-luxury-gold font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-luxury-gold/10 transition-colors"
              >
                Exclusive Offers
              </button>
            </div>
          </div>

          {/* Right column: Visual Canvas Frame */}
          <div className="flex justify-center">
            <div className="bg-luxury-card rounded-[2rem] shadow-2xl relative max-w-sm w-full aspect-square flex items-center justify-center overflow-hidden border border-luxury-dark group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent z-10 pointer-events-none"></div>

              {/* Linked with local hero path */}
              <img
                src={heroCream}
                alt="La Crème Absolute"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-serif text-sm italic tracking-wide">La Crème Absolute</p>
                <p className="text-luxury-gold text-[10px] uppercase tracking-widest font-medium">Prestige Formula</p>
              </div>
              <span className="absolute bottom-6 right-6 text-xl text-luxury-gold/60 z-20">✨</span>
              <span className="absolute top-6 left-6 text-xl text-luxury-gold/60 z-20">✦</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE BRAND PHILOSOPHY MATRIX */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-luxury-dark pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 text-left">
            <span className="text-luxury-gold text-lg font-serif">01 /</span>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase">Molecular Sourcing</h3>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Every compound is hand-selected from vetted biotechnology clusters across Switzerland and Japan, ensuring ultra-pure potency markers.
            </p>
          </div>
          <div className="space-y-3 text-left">
            <span className="text-luxury-gold text-lg font-serif">02 /</span>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase">Clinical Integrity</h3>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Formulas are synthesized inside medical-grade clean-rooms, omitting arbitrary fillers to completely eliminate active element layout shifts.
            </p>
          </div>
          <div className="space-y-3 text-left">
            <span className="text-luxury-gold text-lg font-serif">03 /</span>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase">Ethical Logistics</h3>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              We operate strictly under cruelty-free validation protocols, delivering products inside climate-stabilized protective packaging vectors.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SIGNATURE BESPOKE EDITORIAL COLLECTION */}
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-luxury-dark pb-6">
          <div className="text-left space-y-2">
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.2em] font-medium block">CURATED HIGH-PERFORMANCE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">The Signature Suite</h2>
          </div>
          <button
            onClick={() => setCurrentPage('products')}
            className="text-luxury-gold hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors mt-4 md:mt-0 flex items-center space-x-1"
          >
            <span>View All Formulas</span>
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Obsidian Renewal Serum */}
          <div className="bg-luxury-card border border-luxury-dark rounded-2xl overflow-hidden text-left hover:border-luxury-gold/40 transition-all group relative shadow-xl flex flex-col justify-between">
            <div>
              <div className="bg-luxury-pitch aspect-[16/10] relative overflow-hidden border-b border-luxury-dark/40">
                {/* Linked with local serum path */}
                <img
                  src={serumElixir}
                  alt="Obsidian Renewal Elixir"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-luxury-gold text-[#0A0A0A] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded z-10">
                  Best Seller
                </span>
                <span className="absolute top-4 right-4 text-stone-400 font-mono text-xs bg-[#0A0A0A]/60 px-2 py-0.5 rounded backdrop-blur-sm z-10">50ml</span>
              </div>
              <div className="p-6 space-y-1">
                <span className="text-luxury-gold text-[10px] uppercase tracking-widest font-medium block">Biometric Oil Serum</span>
                <h3 className="text-white font-bold text-lg tracking-wide group-hover:text-luxury-gold transition-colors">Obsidian Renewal Elixir</h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed pt-1">
                  Active cellular defense configuration formulated to accelerate epidermal barrier rejuvenation during sleep cycles.
                </p>
              </div>
            </div>
            <div className="p-6 pt-2 flex justify-between items-center border-t border-luxury-dark/40 bg-luxury-pitch/40">
              <span className="text-white font-serif font-bold text-xl">$210</span>
              <button
                onClick={() => setCurrentPage('products')}
                className="bg-luxury-panel border border-luxury-dark text-stone-300 hover:text-[#0A0A0A] hover:bg-luxury-gold hover:border-transparent text-[10px] uppercase tracking-widest font-bold py-2.5 px-5 rounded-md transition-all"
              >
                Acquire Formula
              </button>
            </div>
          </div>

          {/* Card 2: Velvet Metallurgy Palette */}
          <div className="bg-luxury-card border border-luxury-dark rounded-2xl overflow-hidden text-left hover:border-luxury-gold/40 transition-all group relative shadow-xl flex flex-col justify-between">
            <div>
              <div className="bg-luxury-pitch aspect-[16/10] relative overflow-hidden border-b border-luxury-dark/40">
                {/* Linked with local palette path */}
                <img
                  src={paletteMetallic}
                  alt="Velvet Metallurgy Palette"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-luxury-gold text-[#0A0A0A] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded z-10">
                  Limited Release
                </span>
                <span className="absolute top-4 right-4 text-stone-400 font-mono text-xs bg-[#0A0A0A]/60 px-2 py-0.5 rounded backdrop-blur-sm z-10">12g</span>
              </div>
              <div className="p-6 space-y-1">
                <span className="text-luxury-gold text-[10px] uppercase tracking-widest font-medium block">Satin Finish Pigments</span>
                <h3 className="text-white font-bold text-lg tracking-wide group-hover:text-luxury-gold transition-colors">Velvet Metallurgy Palette</h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed pt-1">
                  Finely milled botanical extract pigments carrying micro-reflective structural layers for unmatched luminous transitions.
                </p>
              </div>
            </div>
            <div className="p-6 pt-2 flex justify-between items-center border-t border-luxury-dark/40 bg-luxury-pitch/40">
              <span className="text-white font-serif font-bold text-xl">$85</span>
              <button
                onClick={() => setCurrentPage('products')}
                className="bg-luxury-panel border border-luxury-dark text-stone-300 hover:text-[#0A0A0A] hover:bg-luxury-gold hover:border-transparent text-[10px] uppercase tracking-widest font-bold py-2.5 px-5 rounded-md transition-all"
              >
                Acquire Formula
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 4. HERITAGE INVITATION BANNER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-luxury-card border border-luxury-dark rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl relative">

          <div className="p-8 md:p-16 flex flex-col justify-center text-left md:col-span-7 space-y-4 z-10">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.2em] font-medium block">GENEVA LAB ARCHIVES</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide leading-tight">
              Engineered Beyond the Confines of Classical Dermatology
            </h2>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-md">
              Learn about our clinical legacy, patented cellular biometrics, and the pristine laboratory research boards configuring your skincare rituals.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setCurrentPage('about')}
                className="border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-[#0A0A0A] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg transition-all shadow-xl block w-full sm:w-auto text-center"
              >
                Our Heritage Story
              </button>
            </div>
          </div>

          <div className="h-64 md:h-full md:col-span-5 relative border-t md:border-t-0 md:border-l border-luxury-dark">
            {/* Linked with local lab heritage path */}
            <img
              src={heritageLab}
              alt="Geneva Research Labs"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-70 transition-all duration-700"
            />
          </div>

        </div>
      </div>

      {/* 5. LAB SUITE ACCESS EDITORIAL (NEWSLETTER) */}
      <div className="max-w-md mx-auto px-6 text-center space-y-6">
        <div className="space-y-2">
          <span className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold">PRESTIGE CONSORTIUM</span>
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">Join The Priority Allocations</h2>
          <p className="text-stone-400 text-xs font-light leading-relaxed">
            Register your digital communication point to secure earliest notifications regarding limited batch releases and clinical lab updates.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL..."
            className="bg-luxury-card border border-luxury-dark text-white rounded-md px-4 py-3 text-xs uppercase tracking-widest placeholder-stone-600 focus:outline-none focus:border-luxury-gold/60 flex-grow"
          />
          <button
            type="submit"
            className="bg-luxury-gold text-[#0A0A0A] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-md hover:bg-white transition-all whitespace-nowrap"
          >
            Request Access
          </button>
        </form>
      </div>

    </div>
  );
}