import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import tableImg from '../../assets/table.png';
import chairImg from '../../assets/chair.png';
import coffeeTableImg from '../../assets/coffee-table.png';
import bookshelfImg from '../../assets/bookshelf.png';
import benchImg from '../../assets/bench.png';
import deskImg from '../../assets/desk.png';

const Products = () => {
    const products = [
        {
            id: 1,
            image: tableImg,
            title: 'Floating Oak Table',
            price: 1299,
            description: 'Handcrafted dining table with elegant grain patterns and modern Scandinavian design.'
        },
        {
            id: 2,
            image: chairImg,
            title: 'Levitating Walnut Chair',
            price: 499,
            description: 'Ergonomic chair with curved backrest, made from premium walnut wood.'
        },
        {
            id: 3,
            image: coffeeTableImg,
            title: 'Live Edge Coffee Table',
            price: 899,
            description: 'Unique coffee table featuring natural live edge and beautiful wood grain.'
        },
        {
            id: 4,
            image: bookshelfImg,
            title: 'Geometric Bookshelf',
            price: 799,
            description: 'Modern bookshelf with clean geometric design and ample storage space.'
        },
        {
            id: 5,
            image: benchImg,
            title: 'Artisan Bench',
            price: 649,
            description: 'Rustic bench with live edge, perfect blend of traditional and modern.'
        },
        {
            id: 6,
            image: deskImg,
            title: 'Minimalist Desk',
            price: 1099,
            description: 'Sleek home office desk with drawer, crafted from premium walnut.'
        }
    ];

    return (
        <section id="products" className="py-24 bg-cream relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-radial opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-gold/20 text-wood px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Our Collection
                        </span>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
                        Floating Masterpieces
                    </h2>
                    <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                        Each piece is carefully handcrafted to defy conventional design,
                        blending artisan tradition with modern aesthetics.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-charcoal text-cream px-10 py-4 rounded-full font-semibold text-lg floating-shadow hover:deep-shadow transition-all"
                    >
                        View Full Collection
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
