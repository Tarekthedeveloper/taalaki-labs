import React, { useState, useMemo } from 'react';
import imgObsidian from '../assets/prod-obsidian.jpg';
import imgGlaze from '../assets/prod-glaze.jpg';
import imgCream from '../assets/prod-cream.jpg';
import imgPowder from '../assets/prod-powder.jpg';
import imgPhyto from '../assets/prod-phyto.jpg';
import imgImperial from '../assets/prod-imperial.jpg';
import imgHydraluxe from '../assets/prod-hydraluxe.jpg';
import imgBalm from '../assets/prod-balm.jpg';

// Keep in sync with the catalog in Products.jsx
const CATALOG = {
  1: { name: '24K Gold Obsidian Concentrate', type: 'Serum', size: '30ml', price: 85, image: imgObsidian },
  2: { name: 'Satin Velvet Luxury Lip Glaze', type: 'Lip', size: '6.5ml', price: 32, image: imgGlaze },
  3: { name: 'Absolute Hydration Moisture Cream', type: 'Moisturizer', size: '50ml', price: 64, image: imgCream },
  4: { name: 'Sovereign Luminous Pressed Powder', type: 'Face', size: '10g', price: 48, image: imgPowder },
  5: { name: 'Phyto-Luminous Restorative Oil', type: 'Face oil', size: '45ml', price: 92, image: imgPhyto },
  6: { name: 'Imperial Eye-Lift Bio-Serum', type: 'Eye serum', size: '15ml', price: 110, image: imgImperial },
  7: { name: 'Hydra-Luxe Hydrating Complex', type: 'Gel moisturizer', size: '50ml', price: 72, image: imgHydraluxe },
  8: { name: 'Volcanic Mineral Sculpting Balm', type: 'Face', size: '15g', price: 54, image: imgBalm },
};

const QUESTIONS = [
  { key: 'skin', title: 'What is your skin type?', hint: 'Think about how your skin feels a few hours after cleansing.',
    options: [
      { value: 'dry', label: 'Dry', note: 'Feels tight or flaky' },
      { value: 'normal', label: 'Normal', note: 'Comfortable, balanced' },
      { value: 'oily', label: 'Oily', note: 'Shiny, especially on the T-zone' },
      { value: 'combination', label: 'Combination', note: 'Oily T-zone, drier cheeks' },
      { value: 'sensitive', label: 'Sensitive', note: 'Reacts easily or looks red' },
    ] },
  { key: 'concern', title: 'What is your main skincare goal?', hint: 'Choose the one that matters most right now.',
    options: [
      { value: 'hydration', label: 'Hydration', note: 'Skin that feels soft and comfortable' },
      { value: 'tone', label: 'Even, radiant tone', note: 'Dullness or uneven look' },
      { value: 'lines', label: 'Fine lines and eye area', note: 'Smoother look, less puffiness' },
      { value: 'redness', label: 'Visible redness', note: 'Calmer, more balanced skin' },
    ] },
  { key: 'makeup', title: 'Do you want makeup recommendations?', hint: 'We will add products that work with your routine.',
    options: [
      { value: 'none', label: 'Skincare only', note: 'No makeup' },
      { value: 'lips', label: 'Lips', note: 'A lip product' },
      { value: 'face', label: 'Face', note: 'Powder and sculpting' },
      { value: 'both', label: 'Lips and face', note: 'The full set' },
    ] },
];

function buildRoutine({ skin, concern, makeup }) {
  const serum = concern === 'lines' ? 6 : 1;
  const moisturizer = skin === 'oily' || skin === 'combination' ? 7 : 3;
  const useOil = (concern === 'redness' || concern === 'hydration' || skin === 'sensitive' || skin === 'dry') && skin !== 'oily' && skin !== 'combination';

  const reasons = {
    1: concern === 'tone' ? 'Supports renewal and an even-looking tone.' : 'A lightweight treatment step that suits every skin type.',
    6: 'Targets fine lines and puffiness around the eyes. Dab around the orbital bone.',
    7: 'A light gel that hydrates without heaviness, suited to oily and combination skin.',
    3: 'A rich barrier cream that locks in moisture for up to 48 hours.',
    5: 'Helps soothe visible redness and supports the skin barrier overnight.',
    2: 'Comfortable, pigmented color for lips.',
    4: 'Controls shine and sets makeup with a natural finish.',
    8: 'Natural-looking contour that blends easily over moisturizer.',
  };

  const morning = [
    { step: 'Treat', id: serum },
    { step: 'Moisturize', id: moisturizer },
  ];
  const night = [
    { step: 'Treat', id: serum },
    ...(useOil ? [{ step: 'Nourish', id: 5 }] : []),
    { step: 'Moisturize', id: moisturizer },
  ];

  const extras = [];
  if (makeup === 'face' || makeup === 'both') extras.push({ step: 'Makeup', id: 4 }, { step: 'Makeup', id: 8 });
  if (makeup === 'lips' || makeup === 'both') extras.push({ step: 'Makeup', id: 2 });

  const ids = [...new Set([...morning, ...night, ...extras].map(s => s.id))];
  return { morning, night, extras, ids, reasons };
}

export default function Routine({ setCurrentPage }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const finished = step >= QUESTIONS.length;
  const q = QUESTIONS[step];
  const routine = useMemo(() => (finished ? buildRoutine(answers) : null), [finished, answers]);
  const total = routine ? routine.ids.reduce((s, id) => s + CATALOG[id].price, 0) : 0;

  const choose = (value) => {
    setAnswers({ ...answers, [q.key]: value });
    setStep(step + 1);
  };
  const back = () => setStep(Math.max(0, step - 1));
  const restart = () => { setAnswers({}); setStep(0); };
  const go = (page) => setCurrentPage && setCurrentPage(page);

  const label = (key) => QUESTIONS.find(x => x.key === key).options.find(o => o.value === answers[key]).label;

  const StepList = ({ title, items }) => (
    <div className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl p-6 shadow-xl">
      <h4 className="text-white font-bold text-base mb-4">{title}</h4>
      <ol className="space-y-3">
        {items.map((s, i) => {
          const p = CATALOG[s.id];
          return (
            <li key={`${s.step}-${s.id}`} className="flex items-center gap-3 text-xs">
              <span className="text-luxury-gold font-serif font-bold text-lg w-5">{i + 1}</span>
              <img src={p.image} alt="" className="w-10 h-10 rounded object-cover border border-luxury-black-800" />
              <div className="flex-1 min-w-0">
                <p className="text-stone-500">{s.step}</p>
                <p className="text-stone-200 font-medium truncate">{p.name}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-fadeUp text-left">

      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-wide">Routine finder</h2>
        <p className="text-stone-400 text-sm font-light leading-relaxed">
          Answer three quick questions and get a morning and night routine built from our catalog.
        </p>
      </div>

      {!finished ? (
        <div className="max-w-2xl mx-auto bg-luxury-black-900 border border-luxury-black-800 rounded-2xl p-8 shadow-2xl">
          {/* Progress */}
          <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
            <span>Question {step + 1} of {QUESTIONS.length}</span>
            {step > 0 && <button onClick={back} className="text-luxury-gold font-semibold hover:text-white transition-colors">Back</button>}
          </div>
          <div className="h-1.5 bg-luxury-black-950 rounded-full overflow-hidden mb-8" role="progressbar" aria-valuemin={0} aria-valuemax={QUESTIONS.length} aria-valuenow={step}>
            <div className="h-full bg-luxury-gold transition-all duration-300" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
          </div>

          <h3 className="text-xl font-bold text-white tracking-wide">{q.title}</h3>
          <p className="text-stone-400 text-sm font-light mt-1 mb-6">{q.hint}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {q.options.map(o => (
              <button key={o.value} onClick={() => choose(o.value)} aria-pressed={answers[q.key] === o.value}
                className={`text-left p-4 rounded-lg border transition-colors ${answers[q.key] === o.value
                  ? 'border-luxury-gold bg-luxury-gold/10'
                  : 'border-luxury-black-800 bg-luxury-black-950 hover:border-luxury-gold/40'}`}>
                <span className="block text-white text-sm font-semibold">{o.label}</span>
                <span className="block text-stone-500 text-xs font-light mt-0.5">{o.note}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Summary */}
          <div className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl p-6 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg">Your routine</h3>
              <p className="text-stone-400 text-xs font-light mt-1">
                {label('skin')} skin · Goal: {label('concern').toLowerCase()} · Makeup: {label('makeup').toLowerCase()}
              </p>
            </div>
            <button onClick={restart} className="self-start md:self-auto text-luxury-gold text-sm font-semibold hover:text-white transition-colors">
              Retake the quiz
            </button>
          </div>

          {/* Routine steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StepList title="Morning" items={routine.morning} />
            <StepList title="Night" items={routine.night} />
          </div>

          {/* Product breakdown */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide mb-6">Why these products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {routine.ids.map(id => {
                const p = CATALOG[id];
                return (
                  <div key={id} className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl p-4 flex gap-4 shadow-xl">
                    <img src={p.image} alt={p.name} className="w-24 h-24 rounded-lg object-cover border border-luxury-black-800" />
                    <div className="flex-1 min-w-0">
                      <p className="text-luxury-gold text-xs font-medium">{p.type} · {p.size}</p>
                      <h4 className="text-white font-bold text-sm">{p.name}</h4>
                      <p className="text-stone-400 text-xs font-light leading-relaxed mt-1">{routine.reasons[id]}</p>
                      <p className="text-stone-200 font-serif font-bold mt-2">${p.price.toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Total + CTA */}
          <div className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl p-8 shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-stone-400 text-xs">Full set ({routine.ids.length} products)</p>
              <p className="text-luxury-gold font-serif text-3xl font-bold">${total.toFixed(2)}</p>
              <p className="text-stone-500 text-xs font-light mt-1">
                {total >= 100 ? 'Qualifies for free shipping.' : 'Free shipping on orders over $100.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => go('products')} className="bg-luxury-gold text-luxury-black-950 font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-white transition-all">
                Shop these products
              </button>
              <button onClick={() => go('contact')} className="border border-luxury-gold text-luxury-gold font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-luxury-gold/10 transition-colors">
                Ask our team
              </button>
            </div>
          </div>

          <p className="text-stone-500 text-xs font-light max-w-2xl">
            This routine is general guidance, not medical advice. Patch-test new products on a small area first, and see a dermatologist for persistent skin conditions.
          </p>
        </div>
      )}
    </div>
  );
}