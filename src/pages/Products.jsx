import React, { useState, useEffect, useMemo } from 'react';
import imgObsidian from '../assets/prod-obsidian.jpg';
import imgGlaze from '../assets/prod-glaze.jpg';
import imgCream from '../assets/prod-cream.jpg';
import imgPowder from '../assets/prod-powder.jpg';
import imgPhyto from '../assets/prod-phyto.jpg';
import imgImperial from '../assets/prod-imperial.jpg';
import imgHydraluxe from '../assets/prod-hydraluxe.jpg';
import imgBalm from '../assets/prod-balm.jpg';

const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_FEE = 9;

const PRODUCTS = [
  { id: 1, name: '24K Gold Obsidian Concentrate', category: 'skincare', type: 'Serum', price: 85, size: '30ml', skin: 'All skin types',
    description: 'A lightweight serum with colloidal gold and volcanic botanical extracts to support skin renewal and an even-looking tone.',
    keyIngredients: 'Colloidal gold, niacinamide, centella extract', usage: 'Apply 2–3 drops morning and night after cleansing.', image: imgObsidian },
  { id: 2, name: 'Satin Velvet Luxury Lip Glaze', category: 'makeup', type: 'Lip', price: 32, size: '6.5ml', skin: 'All shades',
    description: 'A pigmented satin lip lacquer with a comfortable, non-sticky finish and up to 8 hours of wear.',
    keyIngredients: 'Squalane, vitamin E, jojoba esters', usage: 'Apply from the center of the lips outward. Reapply as needed.', image: imgGlaze },
  { id: 3, name: 'Absolute Hydration Moisture Cream', category: 'skincare', type: 'Moisturizer', price: 64, size: '50ml', skin: 'Normal to dry',
    description: 'A rich barrier cream with ceramides and hyaluronic acid that keeps skin hydrated for up to 48 hours.',
    keyIngredients: 'Ceramide NP, hyaluronic acid, shea butter', usage: 'Apply to face and neck as the last step of your routine.', image: imgCream },
  { id: 4, name: 'Sovereign Luminous Pressed Powder', category: 'makeup', type: 'Face', price: 48, size: '10g', skin: 'All skin tones',
    description: 'A finely milled powder that controls shine while keeping a natural, luminous finish.',
    keyIngredients: 'Silica, mica, rice starch', usage: 'Press onto the T-zone or sweep over the face to set makeup.', image: imgPowder },
  { id: 5, name: 'Phyto-Luminous Restorative Oil', category: 'skincare', type: 'Face oil', price: 92, size: '45ml', skin: 'Dry, sensitive',
    description: 'A cold-pressed botanical oil blend that helps soothe visible redness and support the skin barrier overnight.',
    keyIngredients: 'Rosehip oil, squalane, bisabolol', usage: 'Warm 3–4 drops between palms and press into skin at night.', image: imgPhyto },
  { id: 6, name: 'Imperial Eye-Lift Bio-Serum', category: 'skincare', type: 'Eye serum', price: 110, size: '15ml', skin: 'All skin types',
    description: 'A multi-peptide eye treatment that visibly smooths fine lines and reduces the look of puffiness.',
    keyIngredients: 'Palmitoyl tripeptide-1, caffeine, hyaluronic acid', usage: 'Dab around the orbital bone morning and night.', image: imgImperial },
  { id: 7, name: 'Hydra-Luxe Hydrating Complex', category: 'skincare', type: 'Gel moisturizer', price: 72, size: '50ml', skin: 'Oily, combination',
    description: 'A lightweight gel-cream that absorbs quickly, hydrates without heaviness and refines the look of pores.',
    keyIngredients: 'Glycerin, panthenol, green tea extract', usage: 'Apply morning and night after serum.', image: imgHydraluxe },
  { id: 8, name: 'Volcanic Mineral Sculpting Balm', category: 'makeup', type: 'Face', price: 54, size: '15g', skin: 'Light to deep',
    description: 'A blendable cream-to-powder balm for natural-looking contour and definition.',
    keyIngredients: 'Mineral pigments, kaolin, caprylic triglyceride', usage: 'Dot under cheekbones and blend with fingers or a brush.', image: imgBalm },
];

const SORTS = {
  featured: { label: 'Featured', fn: () => 0 },
  low: { label: 'Price: low to high', fn: (a, b) => a.price - b.price },
  high: { label: 'Price: high to low', fn: (a, b) => b.price - a.price },
  name: { label: 'Name: A to Z', fn: (a, b) => a.name.localeCompare(b.name) },
};

const money = (n) => `$${n.toFixed(2)}`;

export default function Products({ setCartCount }) {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');
  const [expanded, setExpanded] = useState(null);
  const [cart, setCart] = useState([]);

  const itemCount = cart.reduce((n, l) => n + l.qty, 0);

  
  useEffect(() => { setCartCount && setCartCount(itemCount); }, [itemCount, setCartCount]);

  const visible = useMemo(() => {
    const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
    return [...list].sort(SORTS[sort].fn);
  }, [filter, sort]);

  const addToCart = (product) =>
    setCart(prev => prev.some(l => l.product.id === product.id)
      ? prev.map(l => l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l)
      : [...prev, { product, qty: 1 }]);

  const changeQty = (id, delta) =>
    setCart(prev => prev.map(l => l.product.id === id ? { ...l, qty: l.qty + delta } : l).filter(l => l.qty > 0));

  const removeLine = (id) => setCart(prev => prev.filter(l => l.product.id !== id));

  const subtotal = cart.reduce((s, l) => s + l.product.price * l.qty, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeUp text-left">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-wide">Shop all products</h2>
        <p className="text-stone-400 text-sm font-light leading-relaxed">
          Skincare and makeup with full ingredient lists. Free shipping on orders over ${FREE_SHIPPING_THRESHOLD}, and 30-day returns on unopened items.
        </p>
      </div>

      {/* Filters + sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <div className="flex space-x-3 text-sm font-semibold" role="tablist" aria-label="Product category">
          {[['all', 'All'], ['skincare', 'Skincare'], ['makeup', 'Makeup']].map(([key, text]) => (
            <button key={key} role="tab" aria-selected={filter === key} onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-lg border transition-all ${filter === key
                ? 'bg-luxury-gold text-luxury-black-950 border-transparent shadow-lg shadow-luxury-gold/10'
                : 'bg-luxury-black-900 text-stone-400 border-luxury-black-800 hover:border-luxury-gold/40'}`}>
              {text}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-stone-500">{visible.length} products</span>
          <label htmlFor="sort" className="sr-only">Sort by</label>
          <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}
            className="bg-luxury-black-900 border border-luxury-black-800 text-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-luxury-gold/50">
            {Object.entries(SORTS).map(([k, s]) => <option key={k} value={k}>{s.label}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Product grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visible.map(p => {
            const open = expanded === p.id;
            return (
              <div key={p.id} className="bg-luxury-black-900 border border-luxury-black-800 rounded-xl overflow-hidden flex flex-col justify-between shadow-xl hover:border-luxury-gold/20 transition-colors group">
                <div>
                  <div className="aspect-[4/3] w-full bg-luxury-black-950 relative overflow-hidden border-b border-luxury-black-800">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                    <span className="absolute bottom-3 right-3 text-xs font-mono text-stone-300 bg-luxury-black-950/80 px-2 py-0.5 rounded backdrop-blur-sm border border-luxury-black-800">{p.size}</span>
                  </div>

                  <div className="p-6 pb-0">
                    <span className="text-xs text-luxury-gold font-medium block mb-1">{p.type} · {p.skin}</span>
                    <h3 className="text-white font-bold text-base tracking-wide">{p.name}</h3>
                    <p className="text-stone-400 text-xs font-light leading-relaxed mt-2">{p.description}</p>

                    <button onClick={() => setExpanded(open ? null : p.id)} aria-expanded={open}
                      className="text-luxury-gold text-xs font-semibold mt-3 hover:text-white transition-colors">
                      {open ? 'Hide details' : 'Ingredients and how to use'}
                    </button>

                    {open && (
                      <dl className="mt-3 space-y-2 text-xs border-t border-luxury-black-800 pt-3">
                        <div><dt className="text-stone-500">Key ingredients</dt><dd className="text-stone-300 font-light">{p.keyIngredients}</dd></div>
                        <div><dt className="text-stone-500">How to use</dt><dd className="text-stone-300 font-light">{p.usage}</dd></div>
                      </dl>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-4 mt-4 flex justify-between items-center border-t border-luxury-black-800 bg-luxury-black-950/20">
                  <span className="font-serif text-stone-200 font-bold text-lg">{money(p.price)}</span>
                  <button onClick={() => addToCart(p)}
                    className="bg-luxury-black-800 text-luxury-gold border border-luxury-gold/30 hover:bg-luxury-gold hover:text-luxury-black-950 hover:border-transparent transition-all px-4 py-2 text-sm font-semibold rounded-md">
                    Add to bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Shopping bag */}
        <aside className="bg-luxury-black-900 border border-luxury-black-800 p-6 rounded-xl shadow-2xl sticky top-24" aria-label="Shopping bag">
          <h3 className="text-white font-bold text-lg border-b border-luxury-black-800 pb-3 mb-4 tracking-wide flex justify-between items-center">
            <span>Shopping bag</span>
            <span className="bg-luxury-gold/10 text-luxury-gold font-mono text-xs px-2.5 py-0.5 rounded-full border border-luxury-gold/20">{itemCount}</span>
          </h3>

          {cart.length > 0 ? (
            <div className="space-y-4">
              {/* Free shipping progress */}
              <div className="text-xs text-stone-400">
                {remaining > 0
                  ? <p>Add <span className="text-white font-semibold">{money(remaining)}</span> more for free shipping.</p>
                  : <p className="text-luxury-gold font-medium">You qualify for free shipping.</p>}
                <div className="h-1.5 bg-luxury-black-950 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-luxury-gold transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <ul className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {cart.map(({ product, qty }) => (
                  <li key={product.id} className="bg-luxury-black-950 p-2.5 rounded border border-luxury-black-800 text-xs">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt="" className="w-10 h-10 object-cover rounded border border-luxury-black-800" />
                      <div className="flex-1 min-w-0">
                        <span className="text-stone-200 font-medium block truncate">{product.name}</span>
                        <span className="text-stone-500 font-mono">{product.size} · {money(product.price)}</span>
                      </div>
                      <button onClick={() => removeLine(product.id)} className="text-stone-500 hover:text-red-400 text-xs px-1 transition-colors" aria-label={`Remove ${product.name}`}>Remove</button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-luxury-black-800 rounded">
                        <button onClick={() => changeQty(product.id, -1)} className="px-2.5 py-1 text-stone-300 hover:text-luxury-gold" aria-label="Decrease quantity">-</button>
                        <span className="px-2 font-mono text-stone-200" aria-live="polite">{qty}</span>
                        <button onClick={() => changeQty(product.id, 1)} className="px-2.5 py-1 text-stone-300 hover:text-luxury-gold" aria-label="Increase quantity">+</button>
                      </div>
                      <span className="text-luxury-gold font-mono font-bold">{money(product.price * qty)}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-luxury-black-800 pt-4 text-sm space-y-2 text-stone-400">
                <div className="flex justify-between"><span>Subtotal</span><span className="font-mono text-stone-200">{money(subtotal)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="font-mono text-stone-200">{shipping === 0 ? 'Free' : money(shipping)}</span></div>
                <div className="flex justify-between text-white font-bold pt-2 border-t border-dashed border-luxury-black-700">
                  <span>Total</span><span className="text-luxury-gold font-mono">{money(total)}</span>
                </div>
                <p className="text-xs text-stone-500 font-light">Taxes and duties are calculated at checkout.</p>
              </div>

              <button className="w-full bg-luxury-gold text-luxury-black-950 text-sm font-bold py-3.5 rounded-lg shadow-lg hover:bg-white transition-all">
                Go to checkout
              </button>
              <p className="text-xs text-stone-500 text-center font-light">Secure payment · 30-day returns on unopened items</p>
            </div>
          ) : (
            <div className="py-10 text-center space-y-2">
              <p className="text-stone-300 text-sm font-medium">Your bag is empty</p>
              <p className="text-stone-500 text-xs font-light">Add a product to see your total and shipping.</p>
            </div>
          )}
        </aside>

      </div>
    </div>
  );
}