import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="min-h-screen py-16 sm:py-20 md:py-24 bg-gradient-radial relative overflow-hidden">
            <div className="absolute inset-0 bg-cream opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 sm:mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
                        Have questions about our furniture? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 sm:p-8 floating-shadow"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-charcoal font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-charcoal/20 focus:border-gold outline-none transition-colors text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-charcoal font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-charcoal/20 focus:border-gold outline-none transition-colors text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-charcoal font-semibold mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-charcoal/20 focus:border-gold outline-none transition-colors text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-charcoal font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-charcoal/20 focus:border-gold outline-none transition-colors resize-none text-sm sm:text-base"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-charcoal text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg floating-shadow hover:deep-shadow transition-all"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div className="bg-white rounded-2xl p-6 sm:p-8 floating-shadow">
                            <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/20 p-3 rounded-lg">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal text-sm sm:text-base">Phone</h4>
                                        <p className="text-charcoal/70 text-sm sm:text-base">+91 1234567890</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/20 p-3 rounded-lg">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal text-sm sm:text-base">Email</h4>
                                        <p className="text-charcoal/70 text-sm sm:text-base">info@futurefurniture.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/20 p-3 rounded-lg">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal text-sm sm:text-base">Address</h4>
                                        <p className="text-charcoal/70 text-sm sm:text-base">123 Furniture Street,<br />New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 sm:p-8 floating-shadow">
                            <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">Business Hours</h3>
                            <div className="space-y-2 text-sm sm:text-base">
                                <div className="flex justify-between">
                                    <span className="text-charcoal/70">Monday - Friday</span>
                                    <span className="font-semibold text-charcoal">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-charcoal/70">Saturday</span>
                                    <span className="font-semibold text-charcoal">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-charcoal/70">Sunday</span>
                                    <span className="font-semibold text-charcoal">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
