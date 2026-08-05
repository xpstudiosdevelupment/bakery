import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Clock, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { TakeoutCartItem } from '../types';
import { BAKERY_INFO } from '../data/bakeryData';

interface TakeoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: TakeoutCartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const TakeoutDrawer: React.FC<TakeoutDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [pickupTime, setPickupTime] = useState('In 30 Minutes');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const gstTax = subtotal * 0.05; // 5% Alberta GST
  const total = subtotal + gstTax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || cart.length === 0) return;

    const randomId = `CB-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(randomId);
    setOrderConfirmed(true);
  };

  const resetAndClose = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl border-l border-stone-200 flex flex-col justify-between overflow-y-auto">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#3D2B1F] text-[#FDFBF7] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#D4A373] text-[#3D2B1F] flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-none">Your Order</h3>
              <span className="text-[10px] uppercase tracking-widest text-[#D4A373]">Coaldale Bakery • 1907 20th Ave</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-6">
          
          {orderConfirmed ? (
            /* Order Receipt View */
            <div className="py-6 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3D2B1F]">Takeout Order Confirmed!</h3>
              
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs text-xs space-y-2 text-left font-sans">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="font-bold text-[#3D2B1F]">Order Reference:</span>
                  <span className="font-mono font-bold text-[#D4A373]">{confirmedOrderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Customer Name:</span>
                  <span className="font-bold text-[#3D2B1F]">{customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Phone:</span>
                  <span className="font-bold text-[#3D2B1F]">{customerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Ready For Pickup:</span>
                  <span className="font-bold text-emerald-700">{pickupTime}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 font-bold text-xs text-[#3D2B1F]">
                  <span>Payment:</span>
                  <span className="text-[#D4A373]">Pay at Store Pickup</span>
                </div>
              </div>

              <div className="bg-[#FDFBF7] p-4 rounded-xl border border-stone-200 text-xs text-stone-600 text-left space-y-1 font-sans">
                <div className="font-bold text-[#3D2B1F] flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#D4A373]" /> Need to modify or pay by phone?
                </div>
                <p>Call Coaldale Bakery directly at <strong className="text-[#3D2B1F] font-mono">(403) 345-3322</strong> and mention your reference code <strong className="text-[#D4A373]">{confirmedOrderId}</strong>.</p>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-[#3D2B1F] text-[#FDFBF7] py-3 rounded-xl font-bold text-xs uppercase tracking-widest"
              >
                Done & Close Window
              </button>
            </div>
          ) : cart.length === 0 ? (
            /* Empty Cart View */
            <div className="py-16 text-center space-y-3">
              <div className="text-4xl">🧺</div>
              <h4 className="font-serif text-lg font-bold text-[#3D2B1F]">Your takeout basket is empty</h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto font-sans">
                Explore our fresh sourdoughs, Dutch sausage rolls, pastries, and donuts to build your order!
              </p>
            </div>
          ) : (
            /* Cart Item List */
            <div className="space-y-4 font-sans">
              <div className="flex justify-between items-center text-[10px] font-bold text-stone-400 uppercase tracking-widest border-b border-stone-200 pb-2">
                <span>Selected Bakery Items ({cart.length})</span>
                <button
                  onClick={onClearCart}
                  className="text-rose-600 hover:underline flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                >
                  <Trash2 className="w-3 h-3" /> Clear Cart
                </button>
              </div>

              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="bg-white p-3 rounded-xl border border-stone-200 flex items-center gap-3 shadow-2xs"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-14 h-14 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 space-y-1">
                      <div className="font-serif font-bold text-xs text-[#3D2B1F] leading-snug">
                        {item.menuItem.name}
                      </div>
                      {item.menuItem.unit && (
                        <div className="text-xs text-stone-500 font-sans font-medium">
                          {item.menuItem.unit}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#FDFBF7] rounded-lg border border-stone-200 px-1 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="p-1 hover:text-[#D4A373]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-bold text-xs text-[#3D2B1F]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="p-1 hover:text-[#D4A373]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="text-stone-400 hover:text-rose-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkout Form */}
              <form onSubmit={handlePlaceOrder} className="pt-4 border-t border-stone-200 space-y-4 text-xs font-sans">
                <div>
                  <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">
                    Requested Pickup Time *
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F] font-medium"
                  >
                    <option value="In 20 Minutes">In 20 Minutes</option>
                    <option value="In 30 Minutes">In 30 Minutes</option>
                    <option value="In 45 Minutes">In 45 Minutes</option>
                    <option value="Today at 12:00 PM">Today at 12:00 PM</option>
                    <option value="Today at 3:00 PM">Today at 3:00 PM</option>
                    <option value="Tomorrow Morning at 8:00 AM">Tomorrow Morning at 8:00 AM</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone #"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Special Order Notes</label>
                  <input
                    type="text"
                    placeholder="e.g. Please slice bread, extra bag..."
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F]"
                  />
                </div>

                {/* Payment Notice */}
                <div className="bg-white p-3.5 rounded-xl border border-stone-200 space-y-1 font-sans text-xs">
                  <div className="font-bold text-[#3D2B1F] flex items-center justify-between">
                    <span>Payment:</span>
                    <span className="text-[#D4A373]">Pay In-Store at Pickup</span>
                  </div>
                  <p className="text-stone-500 text-[11px]">
                    Debit, Credit, and Cash accepted upon order pickup.
                  </p>
                </div>

                <button
                  type="submit"
                  id="place-takeout-order-btn"
                  className="w-full bg-[#3D2B1F] hover:bg-[#5A4030] text-[#FDFBF7] py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D4A373]" />
                  <span>Place Takeout Order</span>
                </button>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
