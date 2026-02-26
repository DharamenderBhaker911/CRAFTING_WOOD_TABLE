import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import T1 from '../assets/ALL_Table/T1.jpeg';
import T3 from '../assets/ALL_Table/T3.jpeg';
import T5 from '../assets/ALL_Table/T5.jpeg';
import Bench from '../assets/Bench_01/Bench_01.png';
import H2 from '../assets/Bench_01/H2.jpeg';
import H5 from '../assets/Bench_01/H5.jpeg';

/* ── Animated Counter ── */
const Counter = ({ end, suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = end / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Product Carousel ── */
const products = [
    { img: T1, name: 'River Flow Dining Table', price: '₹45,000', tag: 'Bestseller' },
    { img: T3, name: 'Epoxy Resin Coffee Table', price: '₹28,000', tag: 'New Arrival' },
    { img: T5, name: 'Live Edge Slab Table', price: '₹52,000', tag: 'Premium' },
    { img: Bench, name: 'Artisan Bench', price: '₹18,000', tag: 'Popular' },
    { img: H2, name: 'Handcrafted Hall Table', price: '₹22,000', tag: 'Trending' },
    { img: H5, name: 'Studio Study Desk', price: '₹16,000', tag: 'Limited' },
];

const testimonials = [
    { name: 'Aarav Sharma', city: 'Chandigarh', text: 'Absolutely stunning craftsmanship! The epoxy river table is the centerpiece of our living room. Everyone who visits asks about it.', stars: 5 },
    { name: 'Priya Mehta', city: 'Delhi', text: 'Ordered a custom dining table and I am blown away by the quality. Delivery was on time and the finish is flawless.', stars: 5 },
    { name: 'Rajan Verma', city: 'Mumbai', text: 'Best furniture I have ever bought. The wood grain combined with epoxy is just otherworldly. 100% recommend!', stars: 5 },
];

const Home = () => {
    const heroRef = useRef(null);
    const statsRef = useRef(null);
    const statsInView = useInView(statsRef, { once: true });

    const [activeSlide, setActiveSlide] = useState(0);

    // Auto-advance hero slides
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const heroImages = [T1, T3, T5];

    return (
        <div className="overflow-x-hidden">

            {/* ══════════════ HERO SECTION ══════════════ */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #1a1208 0%, #2D2116 40%, #3d2b1a 70%, #1a1208 100%)',
                }}
            >
                {/* Background slideshow images */}
                {heroImages.map((img, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: activeSlide === i ? 0.18 : 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}

                {/* Rich wood-grain overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                {/* Ambient glow blobs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(201,169,97,0.25) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-20 left-10 w-96 h-96 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(139,111,71,0.3) 0%, transparent 70%)' }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                    <div className="flex flex-col items-center text-center">

                        {/* ── Logo with halo ── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'backOut' }}
                            className="relative mb-8 sm:mb-10"
                        >
                            {/* Glowing ring behind logo */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-3 sm:-inset-4 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, #C9A961, #8B6F47, #C9A961, #8B9D83, #C9A961)',
                                    opacity: 0.7,
                                    filter: 'blur(6px)',
                                }}
                            />
                            {/* Pulsing outer ring */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -inset-5 sm:-inset-6 rounded-full border-2 border-yellow-400/40"
                            />
                            {/* Logo container */}
                            <div
                                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center"
                                style={{
                                    background: 'radial-gradient(circle at 35% 35%, #fff8ea, #f5e6c0)',
                                    boxShadow: '0 0 40px rgba(201,169,97,0.6), 0 0 80px rgba(201,169,97,0.3), inset 0 2px 8px rgba(255,255,255,0.8)',
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="Suzeraine Epoxy Smith"
                                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain p-2"
                                />
                            </div>
                        </motion.div>

                        {/* Brand name */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-yellow-300/80 tracking-[0.3em] text-xs sm:text-sm uppercase font-semibold mb-3"
                        >
                            Suzeraine Epoxy Smith
                        </motion.p>

                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.9 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                            style={{ color: '#F9F7F2', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                        >
                            Furniture That
                            <br />
                            <span
                                style={{
                                    background: 'linear-gradient(90deg, #C9A961, #e8c97a, #8B6F47, #C9A961)',
                                    backgroundSize: '200%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    animation: 'shimmer 3s linear infinite',
                                }}
                            >
                                Tells Your Story
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light px-4"
                        >
                            Handcrafted epoxy & wood masterpieces — where nature's raw beauty meets
                            artisan precision. Each piece is one of a kind.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        >
                            <Link to="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all"
                                    style={{
                                        background: 'linear-gradient(135deg, #C9A961, #a0823d)',
                                        color: '#1a1208',
                                        boxShadow: '0 8px 30px rgba(201,169,97,0.5)',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    🪵 Explore Collection
                                </motion.button>
                            </Link>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 transition-all"
                                    style={{
                                        borderColor: '#C9A961',
                                        color: '#C9A961',
                                        background: 'rgba(201,169,97,0.08)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    Custom Order
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1, duration: 1 }}
                            className="flex flex-wrap gap-3 justify-center"
                        >
                            {[
                                { icon: '🏅', text: 'Premium Quality' },
                                { icon: '✋', text: 'Handcrafted' },
                                { icon: '🚚', text: 'Pan India Delivery' },
                                { icon: '🔒', text: 'Secure Payments' },
                                { icon: '🌿', text: 'Eco-Friendly Wood' },
                            ].map((badge, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -3 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                    style={{
                                        background: 'rgba(201,169,97,0.12)',
                                        border: '1px solid rgba(201,169,97,0.35)',
                                        color: '#e8c97a',
                                        backdropFilter: 'blur(6px)',
                                    }}
                                >
                                    <span>{badge.icon}</span>
                                    <span>{badge.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Slide dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            className="rounded-full transition-all"
                            style={{
                                width: activeSlide === i ? '28px' : '8px',
                                height: '8px',
                                background: activeSlide === i ? '#C9A961' : 'rgba(255,255,255,0.3)',
                            }}
                        />
                    ))}
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-16 right-8 flex flex-col items-center gap-2 z-20 hidden sm:flex"
                >
                    <span className="text-white/40 text-xs tracking-widest rotate-90 mb-4">SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ color: '#C9A961', fontSize: '20px' }}
                    >↓</motion.div>
                </motion.div>
            </section>

            {/* ══════════════ STATS / TRUST SECTION ══════════════ */}
            <section
                ref={statsRef}
                className="py-12 sm:py-16"
                style={{ background: 'linear-gradient(135deg, #2D2116, #3d2b1a)' }}
            >
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    {[
                        { value: 500, suffix: '+', label: 'Happy Customers' },
                        { value: 6, suffix: '+', label: 'Years of Craft' },
                        { value: 1000, suffix: '+', label: 'Pieces Created' },
                        { value: 15, suffix: '+', label: 'Cities Served' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={statsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.7 }}
                            className="text-center p-4"
                        >
                            <div
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                                style={{
                                    background: 'linear-gradient(135deg, #C9A961, #e8c97a)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-white/60 text-sm sm:text-base font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ══════════════ WHY CHOOSE US ══════════════ */}
            <section className="py-16 sm:py-24 bg-[#F9F7F2]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div
                            className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
                            style={{ background: 'rgba(201,169,97,0.15)', color: '#8B6F47' }}
                        >
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
                            Crafted with{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #C9A961, #8B6F47)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Passion & Precision
                            </span>
                        </h2>
                        <p className="text-[#2D2D2D]/60 max-w-xl mx-auto text-base sm:text-lg">
                            Every table, bench, and shelf we create is a work of art — built to last generations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: '🪵',
                                title: 'Premium Natural Wood',
                                desc: 'We source only the finest slab wood — teak, walnut, and live-edge varieties that bring nature\'s artistry indoors.',
                            },
                            {
                                icon: '🎨',
                                title: 'Custom Epoxy Art',
                                desc: 'Our signature epoxy river technique creates flowing, luminous designs that are truly one-of-a-kind and conversation starters.',
                            },
                            {
                                icon: '✋',
                                title: '100% Handcrafted',
                                desc: 'Every piece is crafted by skilled artisans — no mass production. Your furniture is made individually, just for you.',
                            },
                            {
                                icon: '📐',
                                title: 'Custom Dimensions',
                                desc: 'Need a specific size or finish? We build furniture tailored exactly to your space and vision, with zero compromise.',
                            },
                            {
                                icon: '🏭',
                                title: 'Direct from Workshop',
                                desc: 'Buying directly from us means zero middleman markup. You get premium quality at artisan-fair pricing.',
                            },
                            {
                                icon: '🚚',
                                title: 'Safe Pan-India Delivery',
                                desc: 'We carefully pack and deliver your piece safely across India. Chandigarh to Chennai — we reach everywhere.',
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.7 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(139,111,71,0.15)' }}
                                className="p-6 sm:p-8 rounded-2xl transition-all"
                                style={{
                                    background: '#fff',
                                    border: '1.5px solid rgba(201,169,97,0.2)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                                    style={{ background: 'linear-gradient(135deg, rgba(201,169,97,0.2), rgba(139,111,71,0.15))' }}
                                >
                                    {card.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#2D2D2D] mb-3">{card.title}</h3>
                                <p className="text-[#2D2D2D]/60 text-sm sm:text-base leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════ FEATURED PRODUCTS ══════════════ */}
            <section
                className="py-16 sm:py-24"
                style={{ background: 'linear-gradient(180deg, #fdf8f0 0%, #F9F7F2 100%)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4"
                    >
                        <div>
                            <div
                                className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
                                style={{ background: 'rgba(201,169,97,0.15)', color: '#8B6F47' }}
                            >
                                Our Work
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D]">
                                Featured{' '}
                                <span
                                    style={{
                                        background: 'linear-gradient(135deg, #C9A961, #8B6F47)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Masterpieces
                                </span>
                            </h2>
                        </div>
                        <Link to="/products">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-full text-sm font-semibold transition-all"
                                style={{
                                    border: '1.5px solid #C9A961',
                                    color: '#8B6F47',
                                    background: 'transparent',
                                }}
                            >
                                View All →
                            </motion.button>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {products.map((product, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.7 }}
                                whileHover={{ y: -10 }}
                                className="group rounded-2xl overflow-hidden cursor-pointer"
                                style={{
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                                    background: '#fff',
                                }}
                            >
                                <div className="relative overflow-hidden h-56 sm:h-64">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* Tag badge */}
                                    <div
                                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                                        style={{
                                            background: 'linear-gradient(135deg, #C9A961, #a0823d)',
                                            color: '#1a1208',
                                        }}
                                    >
                                        {product.tag}
                                    </div>
                                    {/* Hover overlay CTA */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Link to="/products">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-6 py-2 rounded-full text-sm font-semibold"
                                                style={{
                                                    background: 'rgba(255,255,255,0.95)',
                                                    color: '#2D2116',
                                                }}
                                            >
                                                View Details
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-[#2D2D2D] text-base sm:text-lg mb-1">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: '#8B6F47' }}
                                        >
                                            {product.price}
                                        </span>
                                        <a
                                            href="https://wa.me/message/7IOS6GEQRVSLH1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            Enquire
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════ LOGO + BRAND STATEMENT ══════════════ */}
            <section
                className="py-16 sm:py-24 relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #1a1208 0%, #2D2116 50%, #1a1208 100%)',
                }}
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
                    style={{ border: '2px solid #C9A961' }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
                    style={{ border: '1.5px dashed #C9A961' }}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        {/* Large logo showcase */}
                        <div
                            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full flex items-center justify-center mb-8"
                            style={{
                                background: 'radial-gradient(circle at 35% 35%, #fff8ea, #f0d89a)',
                                boxShadow: '0 0 60px rgba(201,169,97,0.4), 0 0 120px rgba(201,169,97,0.2)',
                            }}
                        >
                            <img
                                src={logo}
                                alt="Suzeraine Epoxy Smith Logo"
                                className="w-28 h-28 sm:w-40 sm:h-40 object-contain p-2"
                            />
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Suzeraine{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(90deg, #C9A961, #e8c97a, #C9A961)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Epoxy Smith
                            </span>
                        </h2>
                        <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
                            Where wood whispers stories and epoxy captures rivers of light —
                            we don't just build furniture, we build legacies that pass through generations.
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3 justify-center mb-10">
                            {['Est. 2018', 'Artisan Workshop', 'Chandigarh & Chennai', 'Custom Orders Welcome'].map((pill, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full text-sm font-medium"
                                    style={{
                                        border: '1px solid rgba(201,169,97,0.4)',
                                        color: '#C9A961',
                                        background: 'rgba(201,169,97,0.08)',
                                    }}
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>

                        <Link to="/about">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -4 }}
                                whileTap={{ scale: 0.96 }}
                                className="px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #C9A961, #a0823d)',
                                    color: '#1a1208',
                                    boxShadow: '0 8px 30px rgba(201,169,97,0.4)',
                                }}
                            >
                                Our Story & Craft →
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════ TESTIMONIALS ══════════════ */}
            <section className="py-16 sm:py-24 bg-[#F9F7F2]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <div
                            className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
                            style={{ background: 'rgba(201,169,97,0.15)', color: '#8B6F47' }}
                        >
                            Customer Love
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D]">
                            What Our{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #C9A961, #8B6F47)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Clients Say
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.7 }}
                                whileHover={{ y: -6 }}
                                className="p-6 sm:p-8 rounded-2xl transition-all"
                                style={{
                                    background: '#fff',
                                    border: '1.5px solid rgba(201,169,97,0.2)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                }}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.stars }).map((_, s) => (
                                        <span key={s} className="text-yellow-400 text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-[#2D2D2D]/70 text-sm sm:text-base leading-relaxed mb-6 italic">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                                        style={{
                                            background: 'linear-gradient(135deg, #C9A961, #8B6F47)',
                                            color: '#fff',
                                        }}
                                    >
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#2D2D2D] text-sm">{t.name}</div>
                                        <div className="text-[#2D2D2D]/50 text-xs">{t.city}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════ CTA BANNER ══════════════ */}
            <section
                className="py-14 sm:py-20"
                style={{
                    background: 'linear-gradient(135deg, #C9A961 0%, #a0823d 50%, #8B6F47 100%)',
                }}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1208] mb-4">
                            Ready for Your Dream Piece?
                        </h2>
                        <p className="text-[#1a1208]/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                            Contact us on WhatsApp for custom orders, pricing, or just to say hi.
                            We'd love to create something special for your home.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://wa.me/message/7IOS6GEQRVSLH1"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -4 }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center gap-3 px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all"
                                style={{
                                    background: '#25D366',
                                    color: '#fff',
                                    boxShadow: '0 8px 25px rgba(37,211,102,0.4)',
                                }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp
                            </motion.a>
                            <Link to="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="inline-flex items-center gap-2 px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg border-2 border-[#1a1208]/30 text-[#1a1208] hover:bg-[#1a1208]/10 transition-all"
                                >
                                    Browse Collection →
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Shimmer keyframe via style tag */}
            <style>{`
                @keyframes shimmer {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
            `}</style>
        </div>
    );
};

export default Home;
