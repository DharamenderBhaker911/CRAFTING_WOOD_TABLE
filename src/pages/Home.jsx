import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial">
            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 left-20 w-48 h-48 bg-sage/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
                <div className="text-center">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal mb-6 text-shadow-soft px-4"
                    >
                        Furniture that
                        <br />
                        <span className="bg-gradient-to-r from-gold via-wood to-sage bg-clip-text text-transparent">
                            Defies Gravity
                        </span>
                    </motion.h1>

                    {/* New Introduction */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gold/90 mb-4 px-4"
                    >
                        We Make Futuristic Furniture
                    </motion.p>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal/70 mb-12 max-w-3xl mx-auto font-light px-4"
                    >
                        Handcrafted wooden masterpieces that blend timeless craftsmanship
                        with modern design. Every piece tells a story.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                    >
                        <Link to="/products">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-charcoal text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg floating-shadow hover:deep-shadow transition-all"
                            >
                                Explore Collection
                            </motion.button>
                        </Link>
                        <Link to="/about">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto border-2 border-charcoal text-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-charcoal hover:text-cream transition-all"
                            >
                                Our Story
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-12 sm:mt-20"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block"
                        >
                            <svg
                                className="w-6 h-10 text-charcoal/50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
