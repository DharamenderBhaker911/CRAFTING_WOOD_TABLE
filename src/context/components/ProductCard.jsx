import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProductCard = ({ id, images, title, price, originalPrice, discount, description, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Support both single image and multiple images
    const imageArray = Array.isArray(images) ? images : [images];
    const hasMultipleImages = imageArray.length > 1;

    // Format Indian Rupees
    const formatINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -15 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative bg-white rounded-2xl p-4 sm:p-6 transition-all duration-500 floating-shadow hover:deep-shadow cursor-pointer overflow-hidden"
        >
            {/* Discount Badge */}
            {discount && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    {discount}% OFF
                </div>
            )}

            {/* Floating animation for the card */}
            <motion.div
                animate={{
                    y: isHovered ? -10 : [0, -8, 0],
                }}
                transition={{
                    duration: isHovered ? 0.3 : 4,
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Image Container with Carousel */}
                <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6 bg-gradient-to-br from-cream to-white p-4 sm:p-8 group/image">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={imageArray[currentImageIndex]}
                            alt={`${title} - Image ${currentImageIndex + 1}`}
                            className="w-full h-48 sm:h-64 object-contain transform transition-transform duration-500"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: isHovered ? 1.1 : 1
                            }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows - Show on hover if multiple images */}
                    {hasMultipleImages && (
                        <>
                            <motion.button
                                onClick={prevImage}
                                initial={{ opacity: 0 }}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-charcoal/70 hover:bg-charcoal text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-10"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>
                            <motion.button
                                onClick={nextImage}
                                initial={{ opacity: 0 }}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-charcoal/70 hover:bg-charcoal text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity z-10"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </>
                    )}

                    {/* Image Counter - Show if multiple images */}
                    {hasMultipleImages && (
                        <div className="absolute top-2 left-2 bg-charcoal/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {currentImageIndex + 1}/{imageArray.length}
                        </div>
                    )}

                    {/* Hover overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent rounded-xl"
                    />
                </div>

                {/* Image Dots Navigation - Show if multiple images */}
                {hasMultipleImages && (
                    <div className="flex justify-center gap-1.5 mb-3">
                        {imageArray.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToImage(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? 'w-6 bg-gold'
                                        : 'w-2 bg-charcoal/30 hover:bg-charcoal/50'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Content */}
                <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-charcoal group-hover:text-gold transition-colors">
                        {title}
                    </h3>
                    <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">
                        {description}
                    </p>

                    {/* Price Section */}
                    <div className="pt-3 sm:pt-4">
                        {originalPrice && (
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-base sm:text-lg text-charcoal/40 line-through">
                                    {formatINR(originalPrice)}
                                </span>
                            </div>
                        )}
                        <div className="flex items-center justify-between">
                            <span className="text-2xl sm:text-3xl font-bold text-wood">
                                {formatINR(price)}
                            </span>
                            <motion.a
                                href={`https://wa.me/919784842239?text=Hi, I'm interested in ${title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-gold to-wood text-cream px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                            >
                                Inquire Now
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Decorative glow effect on hover */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                className="absolute -inset-1 bg-gradient-to-r from-gold to-sage rounded-2xl blur-xl -z-10"
            />
        </motion.div>
    );
};

export default ProductCard;
