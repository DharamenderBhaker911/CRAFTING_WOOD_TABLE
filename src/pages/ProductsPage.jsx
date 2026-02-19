import { motion } from 'framer-motion';
import ProductCard from '../assets/Bench_01/ProductCard';

// Bench
import Bench01 from '../assets/Bench_01/Bench_01.png';
import Bench02 from '../assets/Bench_01/Bench_02.png';
import Bench04 from '../assets/Bench_01/Bench_04.png';
import Bench05 from '../assets/Bench_01/Bench_05.png';

// Round
import Round01 from '../assets/Round_table/Round_01.png';
import Round02 from '../assets/Round_table/Round_02.png';
import Round03 from '../assets/Round_table/Round_03.png';
import Round04 from '../assets/Round_table/Round_04.png';
// 6k tables
import Round05 from '../assets/Round_table/Round_table_01_6k.png';
import Round06 from '../assets/Round_table/Round_table_02_6k.png';
import Round07 from '../assets/Round_table/Round_table_03_6k.png';
import Round08 from '../assets/Round_table/Round_table_04_6k.png';

// Dining
import dining01 from '../assets/16k_dining_table/16k_Dining_table_01.png';
import dining02 from '../assets/16k_dining_table/16k_Dining_table_02.png';
import dining03 from '../assets/16k_dining_table/16k_Dining_table_03.png';
import dining04 from '../assets/16k_dining_table/16k_Dining_table_04.png';
import dining05 from '../assets/16k_dining_table/16k_Dining_table_05.png';

// Study
import img01 from '../assets/images_18k_study_table/img_01.jpeg';
import img02 from '../assets/images_18k_study_table/img_02.jpeg';
import img03 from '../assets/images_18k_study_table/img_03.jpeg';
import img04 from '../assets/images_18k_study_table/img_04.jpeg';
import img05 from '../assets/images_18k_study_table/img_05.jpeg';

// box_13k
import box01 from '../assets/box_13k/box.jpeg';
import box02 from '../assets/box_13k/box01.jpeg';
import box03 from '../assets/box_13k/t1.jpeg';
import box04 from '../assets/box_13k/t2.jpeg';
import box05 from '../assets/box_13k/t3.jpeg';

// Crimson River Signature Dining Table
import image06 from '../assets/18k_design_bench/show_01.jpeg';
import image07 from '../assets/18k_design_bench/show_02.jpeg';
import image08 from '../assets/18k_design_bench/show_03.jpeg';
import image09 from '../assets/18k_design_bench/show_04.jpeg';
import image10 from '../assets/18k_design_bench/show_05.jpeg';

// 
import image11 from '../assets/Glass_image/G_B_01.jpeg';
import image12 from '../assets/Glass_image/G_B_02.jpeg';
import image13 from '../assets/Glass_image/G_B_03.jpeg';
import image14 from '../assets/Glass_image/G_B_04.jpeg';
import image15 from '../assets/Glass_image/G_B_05.jpeg';
// 
import image16 from '../assets/Hotel_image/Hotel_tb_01.jpeg';
import image17 from '../assets/Hotel_image/Hotel_tb_02.jpeg';
import image18 from '../assets/Hotel_image/Hotel_tb_03.jpeg';
import image19 from '../assets/Hotel_image/Hotel_tb_04.jpeg';
import image20 from '../assets/Hotel_image/Hotel_tb_05.jpeg';
import image21 from '../assets/Hotel_image/Hotel_tb_06.jpeg';
import image22 from '../assets/Hotel_image/Hotel_tb_07.jpeg';
// 
import image23 from '../assets/sine_glass/Glass_sine_table.jpeg'
import image24 from '../assets/sine_glass/Glass_sine_table_1.jpeg'
import image25 from '../assets/sine_glass/Glass_sine_table_2.jpeg'
import image26 from '../assets/sine_glass/Glass_sine_table_3.jpeg'
import image27 from '../assets/sine_glass/Glass_sine_table_4.jpeg'
// 
import image28 from '../assets/sine_glass/Sine_01.jpeg'
import image29 from '../assets/sine_glass/Sine_02.jpeg'
import image30 from '../assets/sine_glass/Sine_03.jpeg'
import image31 from '../assets/sine_glass/Sine_04.jpeg'
import image32 from '../assets/sine_glass/Sine_05.jpeg'
// R1-R5 folder
import R1 from '../assets/R1-R5/R1.jpeg';
import R2 from '../assets/R1-R5/R2.jpeg';
// alage image hai 
import R3 from '../assets/R1-R5/R3.jpeg';
import R4 from '../assets/R1-R5/R4.jpeg';
import R5 from '../assets/R1-R5/R5.jpeg';

const ProductsPage = () => {
    const products = [
        {
            id: 1,
            images: [Bench01, Bench02, Bench04, Bench05],
            title: 'Premium Wood Bench',
            originalPrice: 20000,
            discount: 80,
            description: 'Handcrafted wooden bench with luxury polish.'
        },
        {
            id: 2,
            images: [Round01, Round02, Round03, Round04],
            title: 'Epoxy Resin Coffee Table',
            originalPrice: 12000,
            discount: 25,
            description: 'Modern epoxy table with glass finish.'
        },
        {
            id: 3,
            images: [dining01, dining02, dining03, dining04, dining05],
            title: 'Premium Dining Table',
            originalPrice: 24000,
            discount: 30,
            description: 'Elegant dining table for modern homes.'
        },
        {
            id: 4,
            images: [img01, img02, img03, img04, img05],
            title: 'Premium Study Table',
            originalPrice: 28000,
            discount: 35,
            description: 'Spacious study table with premium polish.'
        }, {
            id: 5,
            images: [Round05, Round06, Round07, Round08],
            title: 'Epoxy Resin Coffee Table',
            originalPrice: 10000,
            discount: 25,
            description: 'Modern epoxy table with glass finish.'
        },
        {
            id: 6,
            images: [box01, box02],
            title: 'Aurora River LED Media Console',
            originalPrice: 10000,
            discount: 25,
            description: 'Premium live-edge wood panels fused with deep resin river detailing, framed in matte black steel.'
        },
        {
            id: 7,
            images: [box03, box04, box05],
            title: 'Midnight Flow Live-Edge Coffee Table',
            originalPrice: 15000,
            discount: 25,
            description: 'A bold fusion of rich natural wood grains and deep black epoxy river flow. "Crafted by nature, perfected by design" '
        },
        {
            id: 8,
            images: [image06, image07, image08, image09, image10],
            title: 'Crimson River Signature Dining Table',
            originalPrice: 25000,
            discount: 25,
            description: 'A bold fusion of rich natural wood grains and deep black epoxy river flow. "Crafted by nature, perfected by design" '
        },
        {
            id: 9,
            images: [R1, R2],
            title: 'Obsidian Edge Contemporary Sideboard',
            originalPrice: 45000,
            discount: 25,
            description: 'Featuring a dramatic live-edge wood centerpiece sealed within deep black resin, paired with tinted glass side compartments'
        },
        {
            id: 10,
            images: [R3, R4, R5],
            title: 'Crystal Stream Live-Edge Coffee Table',
            originalPrice: 32000,
            discount: 25,
            description: 'Three raw-edged hardwood slabs seamlessly suspended within a crystal-clear epoxy river.'
        },
        {
            id: 11,
            images: [image11, image12, image13, image14, image15],
            title: 'Azure Coast Live-Edge Epoxy Table',
            originalPrice: 32000,
            discount: 25,
            description: 'Crystal-clear ocean blue resin flowing alongside natural hardwood, detailed with realistic shoreline wave effects and embedded stones'
        },
        {
            id: 12,
            images: [image16, image17, image18, image19, image20, image21, image22],
            title: 'Storm Vein Contemporary Dining Table',
            originalPrice: 40000,
            discount: 25,
            description: 'A bold fusion of natural wood slab center framed with smoky grey resin edges, supported by sleek matte-black steel legs'
        },
        {
            id: 13,
            images: [image23, image24, image25, image26, image27],
            title: 'Azure Coast Live-Edge Epoxy Table',
            originalPrice: 35000,
            discount: 25,
            description: 'A stunning beach-inspired resin artwork featuring deep blue ocean waves blending into golden hardwood terrain.'
        },
        {
            id: 14,
            images: [image28, image29, image30, image31, image32],
            title: 'Midnight Lagoon River Table',
            originalPrice: 45000,
            discount: 25,
            description: 'A stunning beach-inspired resin artwork featuring deep blue ocean waves blending into golden hardwood terrain.'
        }
    ];

    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Premium Collection
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Designed for elegance. Crafted for durability.
                    </p>
                </motion.div>

                {/* Standard clean grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            delay={index * 0.15}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductsPage;
