import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-fadeUp text-left">

      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-wide uppercase">Contact Concierge</h2>
        <p className="text-luxury-gold text-xs uppercase tracking-widest font-semibold">Initiate a Direct Line to Our Prestige Formulation Labs</p>
      </div>

      {/* Main Structural Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Direct Communication Channels & Global Footprint */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-[10px] uppercase text-luxury-gold tracking-widest font-bold block mb-1">01 / Channels</span>
            <h3 className="text-xl font-bold text-white tracking-wide uppercase mb-4">Direct Inquiries</h3>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Have questions regarding private client allocations, wholesale volume distributions, or active compound bio-testing batches? Connect with our dedicated support agents.
            </p>
          </div>

          {/* Quick-Connect Info Blocks */}
          <div className="space-y-4">
            <div className="bg-luxury-black-900 border border-luxury-black-800 p-5 rounded-xl flex items-center space-x-4 shadow-xl">
              <span className="text-2xl text-luxury-gold">✉</span>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Priority Electronic Mail</p>
                <p className="text-white text-sm font-mono tracking-wide">@taalaki.app</p>
              </div>
            </div>

            <div className="bg-luxury-black-900 border border-luxury-black-800 p-5 rounded-xl flex items-center space-x-4 shadow-xl">
              <span className="text-2xl text-luxury-gold">📞</span>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">International Telephony Vector</p>
                <p className="text-white text-sm font-mono tracking-wide">+1 (800) 555-TAALAKI</p>
              </div>
            </div>

            <div className="bg-luxury-black-900 border border-luxury-black-800 p-5 rounded-xl flex items-center space-x-4 shadow-xl">
              <span className="text-2xl text-luxury-gold">📍</span>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Prestige Fulfillment Center</p>
                <p className="text-stone-300 text-xs font-light">Geneva Innovation Arc & Tokyo Labs Distribution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Interactive Inquiry Intake Form */}
        <div className="lg:col-span-7 bg-luxury-black-900 border border-luxury-black-800 p-8 rounded-2xl relative shadow-2xl">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-luxury-gold text-luxury-black-950 font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded">
            Secure Line
          </div>

          <div className="mb-6 border-b border-luxury-black-800 pb-4">
            <span className="text-luxury-gold text-[9px] font-mono tracking-widest uppercase block mb-1">COMMUNICATION UPLINK</span>
            <h4 className="text-white font-bold text-base uppercase tracking-wide">Send Digital Memorandum</h4>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3 animate-fadeIn">
              <span className="text-4xl text-luxury-gold block">✨</span>
              <h5 className="text-white font-bold text-sm uppercase tracking-widest">Transmission Successful</h5>
              <p className="text-stone-400 text-xs font-light max-w-xs mx-auto leading-relaxed">
                Our skin concierge system has processed your parameters. Expect analytical diagnostic contact within 12 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase text-stone-400 tracking-widest block font-bold">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="E.G. ALEXANDRA VANE"
                    className="w-full bg-luxury-black-950 border border-luxury-black-800 text-white rounded-lg px-4 py-3 text-xs uppercase tracking-widest placeholder-stone-700 focus:outline-none focus:border-luxury-gold/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase text-stone-400 tracking-widest block font-bold">Email Coordinate</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="NAME@DOMAIN.COM"
                    className="w-full bg-luxury-black-950 border border-luxury-black-800 text-white rounded-lg px-4 py-3 text-xs uppercase tracking-widest placeholder-stone-700 focus:outline-none focus:border-luxury-gold/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] uppercase text-stone-400 tracking-widest block font-bold">Inquiry Memorandum</label>
                <textarea
                  rows="4"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="DESCRIBE YOUR DERMAL REQUIREMENTS OR BULK DISPATCH REQUESTS..."
                  className="w-full bg-luxury-black-950 border border-luxury-black-800 text-white rounded-lg p-4 text-xs uppercase tracking-widest placeholder-stone-700 focus:outline-none focus:border-luxury-gold/50 transition-colors resize-none leading-relaxed"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-luxury-gold text-luxury-black-950 font-bold text-xs uppercase tracking-widest py-4 rounded-lg shadow-xl shadow-luxury-gold/5 hover:bg-white transition-all transform active:scale-[0.99]"
              >
                Dispatch Message Concierge
              </button>

            </form>
          )}
        </div>

      </div>

      {/* Section: Dynamic Global Allocation Hubs */}
      <div className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl p-8 md:p-12 shadow-2xl mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          <div className="space-y-2">
            <span className="text-luxury-gold text-xs font-serif block">EUROPE /</span>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Geneva Labs Office</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Rue de la Syncope Molecular, Building Delta-4, Switzerland.</p>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l border-luxury-black-800 pt-6 md:pt-0 md:pl-8">
            <span className="text-luxury-gold text-xs font-serif block">ASIA PACIFIC /</span>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Tokyo Extraction Suite</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Minato Pure Cosmetics District, High-Rise Cluster 9, Tokyo.</p>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l border-luxury-black-800 pt-6 md:pt-0 md:pl-8">
            <span className="text-luxury-gold text-xs font-serif block">AMERICAS /</span>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">New York Showroom</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Fifth Avenue Prestige Distribution Framework, Floor 72, NY.</p>
          </div>

        </div>
      </div>

    </div>
  );
}