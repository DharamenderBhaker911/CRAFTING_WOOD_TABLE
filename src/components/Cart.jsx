import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Cart = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        isCartOpen,
        setIsCartOpen
    } = useCart();

    const [showCheckout, setShowCheckout] = useState(false);

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    return (
        <>
            {/* Floating Cart Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-gold to-wood text-cream rounded-full p-5 floating-shadow hover:deep-shadow transition-all"
            >
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                    </svg>
                    {getCartCount() > 0 && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                        >
                            {getCartCount()}
                        </motion.div>
                    )}
                </div>
            </motion.button>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-40"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-gold to-wood text-cream p-6 flex justify-between items-center">
                                <h2 className="text-2xl font-bold">Your Cart</h2>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="hover:rotate-90 transition-transform duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Cart Items - Scrollable */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-16">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-24 w-24 mx-auto text-charcoal/20 mb-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                        <p className="text-charcoal/50 text-lg">Your cart is empty</p>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            className="bg-white rounded-xl p-4 floating-shadow"
                                        >
                                            <div className="flex gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-20 h-20 object-contain rounded-lg bg-cream"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-charcoal">{item.title}</h3>
                                                    <p className="text-wood font-semibold">${item.price}</p>

                                                    <div className="flex items-center gap-3 mt-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-7 h-7 rounded-full bg-sage/20 hover:bg-sage/40 flex items-center justify-center transition-colors"
                                                        >
                                                            <span className="text-lg font-bold">−</span>
                                                        </button>
                                                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-7 h-7 rounded-full bg-sage/20 hover:bg-sage/40 flex items-center justify-center transition-colors"
                                                        >
                                                            <span className="text-lg font-bold">+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700 transition-colors"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>

                            {/* Footer - Total and Checkout */}
                            {cartItems.length > 0 && (
                                <div className="border-t border-charcoal/10 p-6 space-y-4 bg-white">
                                    <div className="flex justify-between items-center text-lg">
                                        <span className="font-semibold text-charcoal">Total:</span>
                                        <span className="text-2xl font-bold text-wood">
                                            ${getCartTotal().toFixed(2)}
                                        </span>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleCheckout}
                                        className="w-full bg-gradient-to-r from-gold to-wood text-cream py-4 rounded-full font-bold text-lg floating-shadow hover:deep-shadow transition-all"
                                    >
                                        Proceed to Checkout
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Checkout Modal */}
            {showCheckout && (
                <CheckoutModal
                    isOpen={showCheckout}
                    onClose={() => setShowCheckout(false)}
                    total={getCartTotal()}
                />
            )}
        </>
    );
};

// Checkout Modal Component
const CheckoutModal = ({ isOpen, onClose, total }) => {
    const { clearCart, setIsCartOpen } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentSuccess(true);

            // Clear cart after 2 seconds and close modals
            setTimeout(() => {
                clearCart();
                setIsCartOpen(false);
                onClose();
                setPaymentSuccess(false);
            }, 2000);
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-charcoal/70 backdrop-blur-md z-[60] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-cream rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto floating-shadow"
                    >
                        {paymentSuccess ? (
                            <div className="p-12 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                    className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </motion.div>
                                <h2 className="text-3xl font-bold text-charcoal mb-2">Payment Successful!</h2>
                                <p className="text-charcoal/60">Thank you for your purchase. We'll send you a confirmation email shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className="bg-gradient-to-r from-gold to-wood text-cream p-6 flex justify-between items-center">
                                    <h2 className="text-2xl font-bold">Checkout</h2>
                                    <button
                                        onClick={onClose}
                                        className="hover:rotate-90 transition-transform duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <form onSubmit={handlePayment} className="p-6 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-charcoal mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-charcoal mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-charcoal mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-charcoal mb-2">
                                            Delivery Address *
                                        </label>
                                        <textarea
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            rows="3"
                                            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors resize-none"
                                            placeholder="Street address, apartment, etc."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-charcoal mb-2">
                                                City *
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                                placeholder="Mumbai"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-charcoal mb-2">
                                                ZIP Code *
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                required
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                                placeholder="400001"
                                            />
                                        </div>
                                    </div>

                                    {/* Payment Info */}
                                    <div className="bg-white rounded-xl p-6 mt-6">
                                        <h3 className="font-bold text-charcoal mb-4 text-lg">Payment Details</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-charcoal mb-2">
                                                    Card Number *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                                    placeholder="1234 5678 9012 3456"
                                                    maxLength="19"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-charcoal mb-2">
                                                        Expiry Date *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                                        placeholder="MM/YY"
                                                        maxLength="5"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-charcoal mb-2">
                                                        CVV *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-gold focus:outline-none transition-colors"
                                                        placeholder="123"
                                                        maxLength="3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="flex justify-between items-center pt-4 border-t border-charcoal/10">
                                        <span className="text-xl font-semibold text-charcoal">Total Amount:</span>
                                        <span className="text-3xl font-bold text-wood">${total.toFixed(2)}</span>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isProcessing}
                                        whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                                        whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                                        className="w-full bg-gradient-to-r from-gold to-wood text-cream py-4 rounded-full font-bold text-lg floating-shadow hover:deep-shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isProcessing ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing Payment...
                                            </span>
                                        ) : (
                                            'Pay Now'
                                        )}
                                    </motion.button>

                                    <p className="text-xs text-center text-charcoal/50 mt-4">
                                        🔒 Your payment information is secure and encrypted
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Cart;
