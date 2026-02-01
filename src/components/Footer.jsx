import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-cream py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">
                            Crafty Timber Creations
                        </h3>
                        <p className="text-cream/70 mb-6 leading-relaxed">
                            Bringing timeless craftsmanship to modern living.
                            Every piece is a testament to the beauty of natural wood and artisan dedication.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'pinterest', 'twitter'].map((social) => (
                                <motion.a
                                    key={social}
                                    href={`#${social}`}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors"
                                >
                                    <span className="text-sm capitalize">{social[0]}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'Products', 'Gallery', 'About Us', 'Contact'].map((link) => (
                                <motion.li key={link} whileHover={{ x: 5 }}>
                                    <a href={`#${link.toLowerCase()}`} className="text-cream/70 hover:text-gold transition-colors">
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-cream/70">
                            <li>New York</li>
                            <li>ESTD 2030</li>
                            <li>info@craftytimber.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-cream/50 text-sm">
                        © 2030 Crafty Timber Creations. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-cream/50">
                        <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
