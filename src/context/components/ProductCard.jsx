import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ProductCard = ({
    images,
    title,
    originalPrice,
    discount,
    description,
    delay = 0
}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const imageArray = Array.isArray(images) ? images : [images];
    const hasMultipleImages = imageArray.length > 1;

    // Auto calculate price
    const price = discount
        ? Math.round(originalPrice - (originalPrice * discount) / 100)
        : originalPrice;

    const formatINR = (amount) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            (prev - 1 + imageArray.length) % imageArray.length
        );
    };

    // 🔥 Auto Play Images
    useEffect(() => {
        if (!hasMultipleImages) return;

        const interval = setInterval(() => {
            if (!isHovered) {
                nextImage();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImageIndex, isHovered]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500"
        >

            {/* 🔥 Attractive Animated Discount Badge */}
            {discount && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="absolute top-4 right-4 z-20"
                >
                    <div className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        {discount}% OFF
                        <span className="absolute -inset-1 rounded-full blur-md bg-red-400 opacity-40 -z-10"></span>
                    </div>
                </motion.div>
            )}

            {/* Image Section */}
            <div className="relative overflow-hidden rounded-2xl mb-8 bg-gray-100 p-6">

                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={imageArray[currentImageIndex]}
                        alt={title}
                        className="w-full h-72 object-contain"
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -150 }}
                        transition={{ duration: 0.4 }}
                        drag={hasMultipleImages ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -50) nextImage();
                            if (info.offset.x > 50) prevImage();
                        }}
                    />
                </AnimatePresence>

                {/* Dots */}
                {hasMultipleImages && (
                    <div className="flex justify-center gap-2 mt-4">
                        {imageArray.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`h-2 rounded-full transition-all ${index === currentImageIndex
                                    ? 'w-6 bg-black'
                                    : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mb-3">
                {title}
            </h3>

            <p className="text-gray-600 text-sm mb-6">
                {description}
            </p>

            {/* Pricing */}
            <div className="border-t pt-4 flex items-center justify-between">
                <div>
                    {discount && (
                        <span className="block text-gray-400 line-through text-sm">
                            {formatINR(originalPrice)}
                        </span>
                    )}
                    <span className="text-2xl font-bold text-green-700">
                        {formatINR(price)}
                    </span>
                </div>

                <a
                    href={`https://wa.me/919784842239?text=Hi, I'm interested in ${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                    Buy Now
                </a>
            </div>

        </motion.div>
    );
};

export default ProductCard;
