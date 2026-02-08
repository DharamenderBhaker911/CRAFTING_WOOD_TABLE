import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-cream relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-gold/20 to-sage/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-wood/20 to-gold/20 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">
                        About{' '}
                        <span className="bg-gradient-to-r from-gold via-wood to-sage bg-clip-text text-transparent">
                            Us
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold to-sage mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-charcoal">
                            Crafting Excellence Since Our Inception
                        </h3>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                            At <strong>Suzeraine Epoxy Smith</strong>, we believe in the timeless beauty of wood.
                            Each piece of furniture we create is not just a functional item, but a work of art
                            that tells its own unique story.
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                            Our skilled artisans combine traditional woodworking techniques with modern design
                            aesthetics to create pieces that stand the test of time. We source premium wood
                            and use cutting-edge epoxy resin techniques to bring you furniture that is both
                            beautiful and durable.
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                            From custom epoxy river tables to handcrafted wooden furniture, every creation
                            is made with precision, passion, and a commitment to quality that you can see
                            and feel in every grain.
                        </p>
                    </motion.div>

                    {/* Right Side - Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Feature Cards */}
                        {[
                            {
                                title: 'Quality Craftsmanship',
                                description: 'Every piece is handcrafted with meticulous attention to detail and superior materials.',
                                icon: '🛠️'
                            },
                            {
                                title: 'Custom Designs',
                                description: 'We work closely with you to bring your vision to life, creating truly unique pieces.',
                                icon: '✨'
                            },
                            {
                                title: 'Sustainable Materials',
                                description: 'We source eco-friendly wood and materials, ensuring sustainability in every creation.',
                                icon: '🌱'
                            },
                            {
                                title: 'Timeless Appeal',
                                description: 'Our furniture combines classic craftsmanship with modern aesthetics for lasting beauty.',
                                icon: '⏳'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl floating-shadow hover:deep-shadow transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{feature.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-charcoal mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-charcoal/70">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
