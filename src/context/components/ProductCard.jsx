import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

/* ── Full-screen Lightbox ── */
const Lightbox = ({ images, startIndex, onClose }) => {
    const [idx, setIdx] = useState(startIndex);

    const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose, prev, next]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)' }}
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white text-xl w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.15)' }}
            >✕</button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {idx + 1} / {images.length}
            </div>

            {/* Main image */}
            <div onClick={e => e.stopPropagation()} className="relative max-w-4xl w-full mx-4">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={idx}
                        src={images[idx]}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="w-full max-h-[75vh] object-contain rounded-2xl"
                        style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
                    />
                </AnimatePresence>

                {/* Prev / Next */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all"
                            style={{ background: 'rgba(201,169,97,0.85)' }}
                        >‹</button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all"
                            style={{ background: 'rgba(201,169,97,0.85)' }}
                        >›</button>
                    </>
                )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
                <div
                    onClick={e => e.stopPropagation()}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2"
                >
                    {images.map((img, i) => (
                        <button key={i} onClick={() => setIdx(i)}>
                            <img
                                src={img}
                                className="w-14 h-14 object-cover rounded-lg transition-all"
                                style={{
                                    border: i === idx ? '2px solid #C9A961' : '2px solid transparent',
                                    opacity: i === idx ? 1 : 0.5,
                                }}
                            />
                        </button>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

/* ── Product Card ── */
const ProductCard = ({
    images,
    title,
    originalPrice,
    discount,
    description,
    category,
    delay = 0
}) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const imageArray = Array.isArray(images) ? images : [images];
    const hasMultiple = imageArray.length > 1;

    const price = discount
        ? Math.round(originalPrice - (originalPrice * discount) / 100)
        : originalPrice;

    const formatINR = (n) =>
        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

    const next = () => setCurrentIdx(i => (i + 1) % imageArray.length);
    const prev = () => setCurrentIdx(i => (i - 1 + imageArray.length) % imageArray.length);

    // Auto-play (pause on hover)
    useEffect(() => {
        if (!hasMultiple || isHovered) return;
        const t = setInterval(next, 3500);
        return () => clearInterval(t);
    }, [currentIdx, isHovered, hasMultiple]);

    return (
        <>
            <AnimatePresence>
                {lightboxOpen && (
                    <Lightbox
                        images={imageArray}
                        startIndex={currentIdx}
                        onClose={() => setLightboxOpen(false)}
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="group relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                    background: '#fff',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(201,169,97,0.18)',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                }}
                whileHover={{
                    y: -8,
                    boxShadow: '0 20px 50px rgba(139,111,71,0.18)',
                }}
            >
                {/* ── IMAGE AREA ── */}
                <div
                    className="relative overflow-hidden cursor-zoom-in"
                    style={{ height: '280px', background: '#f5f0e8' }}
                    onClick={() => setLightboxOpen(true)}
                >
                    {/* Discount Badge */}
                    {discount && (
                        <div
                            className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-bold"
                            style={{
                                background: 'linear-gradient(135deg, #e53e3e, #c53030)',
                                color: '#fff',
                                boxShadow: '0 4px 12px rgba(229,62,62,0.4)',
                            }}
                        >
                            {discount}% OFF
                        </div>
                    )}

                    {/* Expand hint on hover */}
                    <div
                        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '14px' }}
                    >
                        ⤢
                    </div>

                    {/* Slideshow image */}
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIdx}
                            src={imageArray[currentIdx]}
                            alt={title}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            drag={hasMultiple ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) => {
                                if (info.offset.x < -50) next();
                                if (info.offset.x > 50) prev();
                            }}
                        />
                    </AnimatePresence>

                    {/* Gradient overlay at bottom */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)' }}
                    />

                    {/* Prev / Next arrows */}
                    {hasMultiple && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg"
                                style={{ background: 'rgba(0,0,0,0.45)' }}
                            >‹</button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg"
                                style={{ background: 'rgba(0,0,0,0.45)' }}
                            >›</button>
                        </>
                    )}

                    {/* Image count pill */}
                    {hasMultiple && (
                        <div
                            className="absolute bottom-3 right-3 z-20 px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
                        >
                            {currentIdx + 1}/{imageArray.length}
                        </div>
                    )}
                </div>

                {/* ── THUMBNAIL STRIP ── */}
                {hasMultiple && (
                    <div className="flex gap-1.5 px-3 pt-2.5 pb-1 overflow-x-auto scrollbar-hide">
                        {imageArray.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIdx(i)}
                                className="flex-shrink-0 rounded-md overflow-hidden transition-all"
                                style={{
                                    width: '40px',
                                    height: '34px',
                                    border: i === currentIdx
                                        ? '2px solid #C9A961'
                                        : '2px solid transparent',
                                    opacity: i === currentIdx ? 1 : 0.55,
                                }}
                            >
                                <img src={img} className="w-full h-full object-cover" alt="" />
                            </button>
                        ))}
                    </div>
                )}

                {/* ── CONTENT ── */}
                <div className="flex flex-col flex-grow px-5 pt-3 pb-5">
                    {/* Category tag */}
                    {category && (
                        <span
                            className="text-xs font-semibold tracking-wider uppercase mb-1.5"
                            style={{ color: '#8B6F47' }}
                        >
                            {category}
                        </span>
                    )}

                    {/* Title */}
                    <h3 className="font-bold text-[#1a1208] text-base sm:text-lg leading-snug mb-2">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#2D2D2D]/55 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                        {description}
                    </p>

                    {/* ── PRICING + CTA ── */}
                    <div
                        className="flex items-center justify-between pt-4"
                        style={{ borderTop: '1px solid rgba(201,169,97,0.2)' }}
                    >
                        {/* Price block */}
                        <div>
                            {discount && (
                                <span className="block text-xs text-gray-400 line-through leading-none mb-0.5">
                                    {formatINR(originalPrice)}
                                </span>
                            )}
                            <span
                                className="text-xl font-bold"
                                style={{ color: '#8B6F47' }}
                            >
                                {formatINR(price)}
                            </span>
                            {discount && (
                                <span className="ml-2 text-xs font-semibold text-green-600">
                                    Save {formatINR(originalPrice - price)}
                                </span>
                            )}
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={`https://wa.me/919784842239?text=Hi%2C%20I'm%20interested%20in%20*${encodeURIComponent(title)}*%20(Price%3A%20${formatINR(price)})`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                        >
                            <motion.div
                                whileHover={{ scale: 1.06, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
                                style={{
                                    background: '#25D366',
                                    color: '#fff',
                                    boxShadow: '0 4px 14px rgba(37,211,102,0.4)',
                                }}
                            >
                                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Enquire
                            </motion.div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProductCard;
