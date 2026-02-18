import { motion } from 'framer-motion';
import ProductCard from '../context/components/ProductCard';
// import tableImg from '../assets/table.png';
// import chairImg from '../assets/chair.png';
// import coffeeTableImg from '../assets/coffee-table.png';
// import bookshelfImg from '../assets/bookshelf.png';
// import benchImg from '../assets/bench.png';
// import deskImg from '../assets/desk.png';


// Bench images - Multiple images of the same product
import Bench01 from '../assets/Bench_01.png';
import Bench02 from '../assets/Bench_02.png';
import Bench04 from '../assets/Bench_04.png';
import Bench05 from '../assets/Bench_05.png';

// Round Table 
import Round01 from '../assets/Round_01.png';
import Round02 from '../assets/Round_02.png';
import Round03 from '../assets/Round_03.png';
import Round04 from '../assets/Round_04.png';

// Import images
import dining01 from '../assets/16k_dining_table/16k_Dining_table_01.png';
import dining02 from '../assets/16k_dining_table/16k_Dining_table_02.png';
import dining03 from '../assets/16k_dining_table/16k_Dining_table_03.png';
import dining04 from '../assets/16k_dining_table/16k_Dining_table_04.png';
import dining05 from '../assets/16k_dining_table/16k_Dining_table_05.png';

// images
import r1 from '../assets/Round_table_01_6k.png'
import r2 from '../assets/Round_table_02_6k.png'
import r3 from '../assets/Round_table_03_6k.png'
import r4 from '../assets/Round_table_04_6k.png'
import r5 from '../assets/Round_table_05_6k.png'

// images r1
import k1 from '../assets/R1.jpeg'
import k2 from '../assets/R2.jpeg'
import k3 from '../assets/R1-R5/R3.jpeg'
import k4 from '../assets/R1-R5/R4.jpeg'
import k5 from '../assets/R1-R5/R5.jpeg'
import { image, title } from 'framer-motion/client';

// images 18k
import img01 from '../assets/images_18k_study_table/img_01.jpeg'
import img02 from '../assets/images_18k_study_table/img_02.jpeg'
import img03 from '../assets/images_18k_study_table/img_03.jpeg'
import img04 from '../assets/images_18k_study_table/img_04.jpeg'
import img05 from '../assets/images_18k_study_table/img_05.jpeg'

// box_13k 



const ProductsPage = () => {
    const products = [
        // Featured Bench Product with Multiple Images - MEGA DISCOUNT!
        {
            id: 1,
            images: [Bench01, Bench02, Bench04, Bench05], // Multiple angles of the same bench
            title: 'Premium Handcrafted Wood Bench',
            originalPrice: 20000, // ₹20,000
            price: 4000, // ₹4,000 (80% discount!)
            discount: 80,
            description: 'Stunning handcrafted wooden bench with premium finish. Perfect for indoor and outdoor use. Limited time offer with massive 80% discount!'
        },
        // Epoxy Table with Multiple Images
        {
            id: 2,
            images: [Round01, Round02, Round03, Round04], // Array of 4 images
            title: 'Premium Epoxy Resin Coffee Table',
            originalPrice: 12000, // ₹1,49,900
            price: 9000, // 25% discount
            discount: 85,
            description: 'Stunning epoxy resin coffee table with natural wood and transparent glass effect. A true masterpiece that becomes the centerpiece of any room.'
        },
        {
            id: 3,
            images: [dining01, dining02, dining03, dining04, dining05], // Array of 4 images
            title: 'Premium Dining Table',
            originalPrice: 24000, // ₹1,49,900
            price: 16000, // 25% discount
            discount: 25,
            description: 'That is very good furniture for your home. You can use it for many years.'
        },
        {
            id: 4,
            images: [r1, r2, r3, r4, r5],
            title: 'Premium Round Table',
            originalPrice: 10000,
            price: 6000,
            discount: 40,
            description: 'That is very good furniture for your home. You can use it for many years.'

        },
        {
            id: 5,
            images: [k1, k2],
            title: 'Main-Table',
            originalPrice: 25000,
            price: 11000,
            discount: 25,
            description: 'That is very good furniture for your home. You can use it for many years.'
        },
        {
            id: 6,
            images: [k3, k4, k5],
            title: 'Main-Table',
            originalPrice: 25000,
            price: 12000,
            discount: 25,
            description: 'That is very good furniture for your home. You can use it for many years.'
        },
        {
            id: 7,
            images: [img01, img02, img03, img04, img05],
            title: 'Study Table',
            originalPrice: 28000,
            price: 18000,
            discount: 25,
            description: 'That is very good furniture for your home. You can use it for many years.'

        },
        // {
        //     id: 8,
        //     images: [b1, b2],
        //     title: 'Showing box',
        //     originalPrice: 20000,
        //     price: 13000,
        //     discount: 25,
        //     description: 'Box from me'

        // },
        // {
        //     id: 9,
        //     images: [b3, b4, b5],
        //     title: 'Fancy table',
        //     originalPrice: 20000,
        //     price: 13000,
        //     discount: 25,
        //     description: 'Fancy table from me'

        // }
    ];

    return (
        <section id="products" className="py-16 sm:py-20 md:py-24 bg-cream relative overflow-hidden min-h-screen">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-radial opacity-70" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-gold/20 text-wood px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Our Collection
                        </span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 sm:mb-6 px-4">
                        Floating Masterpieces
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto px-4">
                        Each piece is carefully handcrafted to defy conventional design,
                        blending artisan tradition with modern aesthetics.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
