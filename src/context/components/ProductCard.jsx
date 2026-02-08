import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../CartContext';

const ProductCard = ({ id, image, title, price, description, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -15 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative bg-white rounded-2xl p-6 transition-all duration-500 floating-shadow hover:deep-shadow cursor-pointer overflow-hidden"
        >
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
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-cream to-white p-8">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-64 object-contain transform transition-transform duration-500"
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                        }}
                    />

                    {/* Hover overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent rounded-xl"
                    />
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-charcoal group-hover:text-gold transition-colors">
                        {title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                        {description}
                    </p>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4">
                        <span className="text-3xl font-bold text-wood">${price}</span>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => addToCart({ id, image, title, price, description })}
                            className="bg-gradient-to-r from-gold to-wood text-cream px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                        >
                            Add to Cart
                        </motion.button>
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
