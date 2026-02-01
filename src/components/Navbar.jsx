import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-cream/95 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3"
                    >
                        <img
                            src={logo}
                            alt="Crafty Timber Creations"
                            className="h-12 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'Products', 'Gallery', 'About', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, color: '#C9A961' }}
                                className="text-charcoal font-medium text-sm tracking-wide transition-colors cursor-pointer"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(201, 169, 97, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-gold to-wood text-cream px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
                    >
                        Get Quote
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
