import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-fadeUp text-left">

      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-wide uppercase">The TAALAKI Story</h2>
        <p className="text-luxury-gold text-xs uppercase tracking-widest font-semibold">Prestige Dermal Formulations & Conscious Beauty</p>
      </div>

      {/* Grid: Our Heritage & Operational Focus */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

        {/* Left Side: Brand Heritage narrative */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] uppercase text-luxury-gold tracking-widest font-bold block">01 / Our Origin</span>
          <h3 className="text-xl font-bold text-white tracking-wide uppercase">The Evolution of Skin Labs</h3>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            TAALAKI was born from a simple, clinical necessity: providing ultra-pure, high-potency topical care directly to individuals who refuse to compromise on their skin wellness. We recognized that the modern skincare market was overcrowded with superficial marketing, synthetic texturizers, and chemical filler components that cloud true product efficacy.
          </p>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            Our labs isolate premium botanicals and combine them with scientifically backed active compounds. Every bottle we manufacture undergoes analytical testing to ensure optimal dermal bioavailability, long-term moisture retention, and zero paraben contamination.
          </p>
        </div>

        {/* Right Side: What We Sell & Curate */}
        <div className="lg:col-span-5 bg-luxury-black-900 border border-luxury-black-800 rounded-2xl p-8 relative shadow-2xl space-y-6">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-luxury-gold text-luxury-black-950 font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded">
            Our Catalog
          </div>

          <div className="space-y-2 border-b border-luxury-black-800 pb-4">
            <span className="text-luxury-gold text-[9px] font-mono tracking-widest uppercase block">PRODUCT INFRASTRUCTURE</span>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide">What We Specialize In</h4>
          </div>

          <p className="text-stone-400 text-xs font-light leading-relaxed">
            We formulate premium solutions categorized cleanly into dedicated application models, helping you isolate your exact daily routine needs:
          </p>

          <ul className="text-stone-300 text-xs space-y-2 font-light">
            <li className="flex items-center space-x-2">
              <span className="text-luxury-gold text-[10px]">✨</span>
              <span><strong>Clinical Skincare:</strong> Concentrated peptide complexes, stabilized hydrators, and targeted barrier-repair serums.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-luxury-gold text-[10px]">💄</span>
              <span><strong>Prestige Cosmetics:</strong> Lightweight, breathable makeup formulas infused with nourishing active skincare base layers.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Section: Core Commercial Pillars */}
      <div className="mb-24">
        <div className="flex flex-col items-start mb-8">
          <span className="text-[10px] uppercase text-luxury-gold tracking-widest font-bold block mb-1">02 / Footprint</span>
          <h3 className="text-xl font-bold text-white tracking-wide uppercase">Brand Metrics & Milestones</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Milestone 1 */}
          <div className="bg-luxury-black-900 border border-luxury-black-800 p-8 rounded-xl relative overflow-hidden group hover:border-luxury-gold/20 transition-all shadow-xl">
            <div className="text-luxury-gold font-serif text-3xl mb-4 font-bold opacity-40 group-hover:opacity-100 transition-opacity">50k+</div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Global Patrons</h4>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Serving an international, discerning network of clients tracking visible skin improvements and daily barrier stabilization.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="bg-luxury-black-900 border border-luxury-black-800 p-8 rounded-xl relative overflow-hidden group hover:border-luxury-gold/20 transition-all shadow-xl">
            <div className="text-luxury-gold font-serif text-3xl mb-4 font-bold opacity-40 group-hover:opacity-100 transition-opacity">100%</div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Conscious Formulation</h4>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Every item dispatched from our cleanrooms is certified entirely cruelty-free, non-comedogenic, and rigorously bio-tested.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="bg-luxury-black-900 border border-luxury-black-800 p-8 rounded-xl relative overflow-hidden group hover:border-luxury-gold/20 transition-all shadow-xl">
            <div className="text-luxury-gold font-serif text-3xl mb-4 font-bold opacity-40 group-hover:opacity-100 transition-opacity">24/7</div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Prestige App Concierge</h4>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Your ongoing orders, specialized bundles, and localized bag subtotals are tracked seamlessly inside our digital platform layout.
            </p>
          </div>

        </div>
      </div>

      {/* Section: Operational Verification Stats */}
      <div className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl p-8 md:p-12 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-luxury-gold mb-1">50,000+</div>
            <div className="text-[9px] uppercase tracking-widest text-stone-400 font-semibold">Active Customers Served</div>
          </div>

          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-luxury-gold mb-1">30+</div>
            <div className="text-[9px] uppercase tracking-widest text-stone-400 font-semibold">Premium Formulations</div>
          </div>

          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-luxury-gold mb-1">0%</div>
            <div className="text-[9px] uppercase tracking-widest text-stone-400 font-semibold">Parabens, Sulfates, or Fillers</div>
          </div>

          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-luxury-gold mb-1">100%</div>
            <div className="text-[9px] uppercase tracking-widest text-stone-400 font-semibold">Ethical Supply Chain Traceability</div>
          </div>

        </div>
      </div>

    </div>
  );
}