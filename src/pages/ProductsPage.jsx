import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import ProductCard from '../context/components/ProductCard';

// ── Bench / Hall Table
import Bench01 from '../assets/Bench_01/Bench_01.png';
import Bench02 from '../assets/Bench_01/Bench_02.png';
import Bench04 from '../assets/Bench_01/Bench_04.png';
import Bench05 from '../assets/Bench_01/Bench_05.png';
import Bench06 from '../assets/Bench_01/H1.jpeg';
import Bench07 from '../assets/Bench_01/H2.jpeg';
import Bench08 from '../assets/Bench_01/H3.jpeg';
import Bench09 from '../assets/Bench_01/H4.jpeg';
import Bench10 from '../assets/Bench_01/H5.jpeg';

// ── Round / Coffee Table
import Round01 from '../assets/Round_table/Round_01.png';
import Round02 from '../assets/Round_table/Round_02.png';
import Round03 from '../assets/Round_table/Round_03.png';
import Round04 from '../assets/Round_table/Round_04.png';
import Round05 from '../assets/Round_table/Round_table_01_6k.png';
import Round06 from '../assets/Round_table/Round_table_02_6k.png';
import Round07 from '../assets/Round_table/Round_table_03_6k.png';
import Round08 from '../assets/Round_table/Round_table_04_6k.png';

// ── Dining Table
import dining01 from '../assets/16k_dining_table/16k_Dining_table_01.png';
import dining02 from '../assets/16k_dining_table/16k_Dining_table_02.png';
import dining03 from '../assets/16k_dining_table/16k_Dining_table_03.png';
import dining04 from '../assets/16k_dining_table/16k_Dining_table_04.png';
import dining05 from '../assets/16k_dining_table/16k_Dining_table_05.png';

// ── Study Table
import img01 from '../assets/images_18k_study_table/img_01.jpeg';
import img02 from '../assets/images_18k_study_table/img_02.jpeg';
import img03 from '../assets/images_18k_study_table/img_03.jpeg';
import img04 from '../assets/images_18k_study_table/img_04.jpeg';
import img05 from '../assets/images_18k_study_table/img_05.jpeg';
import IM01 from '../assets/images_18k_study_table/IM_01.jpeg';
import IM02 from '../assets/images_18k_study_table/IM_02.jpeg';
import IM03 from '../assets/images_18k_study_table/IM_03.jpeg';
import IM04 from '../assets/images_18k_study_table/IM_04.jpeg';
import IM05 from '../assets/images_18k_study_table/IM_05.jpeg';
import IM06 from '../assets/images_18k_study_table/IM_06.jpeg';
import IM07 from '../assets/images_18k_study_table/IM_07.jpeg';

// ── Box / Media Console
import box01 from '../assets/box_13k/box.jpeg';
import box02 from '../assets/box_13k/box01.jpeg';
import box03 from '../assets/box_13k/t1.jpeg';
import box04 from '../assets/box_13k/t2.jpeg';
import box05 from '../assets/box_13k/t3.jpeg';

// ── Design Bench (Crimson River)
import image06 from '../assets/18k_design_bench/show_01.jpeg';
import image07 from '../assets/18k_design_bench/show_02.jpeg';
import image08 from '../assets/18k_design_bench/show_03.jpeg';
import image09 from '../assets/18k_design_bench/show_04.jpeg';
import image10 from '../assets/18k_design_bench/show_05.jpeg';
import image001 from '../assets/18k_design_bench/G_1.jpeg';
import image002 from '../assets/18k_design_bench/G_2.jpeg';
import image003 from '../assets/18k_design_bench/G_3.jpeg';
import image004 from '../assets/18k_design_bench/G_4.jpeg';

// ── Glass Epoxy
import image11 from '../assets/Glass_image/G_B_01.jpeg';
import image12 from '../assets/Glass_image/G_B_02.jpeg';
import image13 from '../assets/Glass_image/G_B_03.jpeg';
import image14 from '../assets/Glass_image/G_B_04.jpeg';
import image15 from '../assets/Glass_image/G_B_05.jpeg';

// ── Hotel Table
import image16 from '../assets/Hotel_image/Hotel_tb_01.jpeg';
import image17 from '../assets/Hotel_image/Hotel_tb_02.jpeg';
import image18 from '../assets/Hotel_image/Hotel_tb_03.jpeg';
import image19 from '../assets/Hotel_image/Hotel_tb_04.jpeg';
import image20 from '../assets/Hotel_image/Hotel_tb_05.jpeg';
import image21 from '../assets/Hotel_image/Hotel_tb_06.jpeg';
import image22 from '../assets/Hotel_image/Hotel_tb_07.jpeg';

// ── Sine Glass
import image23 from '../assets/sine_glass/Glass_sine_table.jpeg';
import image24 from '../assets/sine_glass/Glass_sine_table_1.jpeg';
import image25 from '../assets/sine_glass/Glass_sine_table_2.jpeg';
import image26 from '../assets/sine_glass/Glass_sine_table_3.jpeg';
import image27 from '../assets/sine_glass/Glass_sine_table_4.jpeg';
import image28 from '../assets/sine_glass/Sine_01.jpeg';
import image29 from '../assets/sine_glass/Sine_02.jpeg';
import image30 from '../assets/sine_glass/Sine_03.jpeg';
import image31 from '../assets/sine_glass/Sine_04.jpeg';
import image32 from '../assets/sine_glass/Sine_05.jpeg';

// ── ALL Table
import image33 from '../assets/ALL_Table/T1.jpeg';
import image34 from '../assets/ALL_Table/T2.jpeg';
import image35 from '../assets/ALL_Table/T3.jpeg';
import image36 from '../assets/ALL_Table/T4.jpeg';
import image37 from '../assets/ALL_Table/T5.jpeg';
import image38 from '../assets/ALL_Table/T6.jpeg';
import image39 from '../assets/ALL_Table/T7.jpeg';

// ── R1-R5
import R1 from '../assets/R1-R5/R1.jpeg';
import R2 from '../assets/R1-R5/R2.jpeg';
import R3 from '../assets/R1-R5/R3.jpeg';
import R4 from '../assets/R1-R5/R4.jpeg';
import R5 from '../assets/R1-R5/R5.jpeg';
import R6 from '../assets/R1-R5/ST_01.jpeg';
import R7 from '../assets/R1-R5/ST_02.jpeg';
import R8 from '../assets/R1-R5/ST_03.jpeg';

// ── Office Table
import office01 from '../assets/Office_Table/OF1.jpeg';
import office02 from '../assets/Office_Table/OF2.jpeg';

// ────────────────────────────────────────────────
const ALL_PRODUCTS = [
    {
        id: 1, category: 'Benches',
        images: [Bench01, Bench02, Bench04, Bench05],
        title: 'Premium Live-Edge Wood Bench',
        originalPrice: 20000, discount: 20,
        description: 'Handcrafted live-edge bench with luxury gloss finish. Perfect for entryways, gardens, or dining spaces.',
    },
    {
        id: 2, category: 'Coffee Tables',
        images: [Round01, Round02, Round03, Round04],
        title: 'Epoxy Resin Coffee Table',
        originalPrice: 12000, discount: 25,
        description: 'Modern epoxy table with a stunning glass-like resin finish over natural wood grain.',
    },
    {
        id: 3, category: 'Dining Tables',
        images: [dining01, dining02, dining03, dining04, dining05],
        title: 'Premium Epoxy Dining Table',
        originalPrice: 24000, discount: 30,
        description: 'Elegant dining table crafted with rich natural wood and premium epoxy detailing for modern homes.',
    },
    {
        id: 4, category: 'Study Tables',
        images: [img01, img02, img03, img04, img05],
        title: 'Premium Study Table',
        originalPrice: 28000, discount: 35,
        description: 'Spacious study / work-from-home table with smooth premium polish and solid wood frame.',
    },
    {
        id: 5, category: 'Coffee Tables',
        images: [Round05, Round06, Round07, Round08],
        title: 'Compact Epoxy Coffee Table',
        originalPrice: 10000, discount: 25,
        description: 'Compact and stylish epoxy coffee table with a vibrant resin finish over solid wood.',
    },
    {
        id: 6, category: 'Consoles',
        images: [box01, box02],
        title: 'Aurora River LED Media Console',
        originalPrice: 10000, discount: 25,
        description: 'Premium live-edge wood panels fused with deep resin river detailing, framed in matte black steel.',
    },
    {
        id: 7, category: 'Coffee Tables',
        images: [box03, box04, box05],
        title: 'Midnight Flow Live-Edge Coffee Table',
        originalPrice: 15000, discount: 25,
        description: 'Rich natural wood grains meet deep black epoxy river flow. Crafted by nature, perfected by design.',
    },
    {
        id: 8, category: 'Dining Tables',
        images: [image06, image07, image08, image09, image10],
        title: 'Crimson River Signature Dining Table',
        originalPrice: 25000, discount: 25,
        description: 'Bold fusion of rich natural wood grains and deep resin river. A statement piece for your dining room.',
    },
    {
        id: 9, category: 'Consoles',
        images: [R1, R2],
        title: 'Obsidian Edge Contemporary Sideboard',
        originalPrice: 45000, discount: 25,
        description: 'Live-edge wood centerpiece sealed in deep black resin, paired with tinted glass side compartments.',
    },
    {
        id: 10, category: 'Coffee Tables',
        images: [R3, R4, R5],
        title: 'Crystal Stream Live-Edge Coffee Table',
        originalPrice: 32000, discount: 25,
        description: 'Three raw-edged hardwood slabs suspended within a crystal-clear epoxy river.',
    },
    {
        id: 11, category: 'Dining Tables',
        images: [image11, image12, image13, image14, image15],
        title: 'Azure Coast Live-Edge Epoxy Table',
        originalPrice: 32000, discount: 25,
        description: 'Ocean blue resin flowing alongside natural hardwood, with realistic shoreline wave effects and embedded stones.',
    },
    {
        id: 12, category: 'Dining Tables',
        images: [image16, image17, image18, image19, image20, image21, image22],
        title: 'Storm Vein Contemporary Dining Table',
        originalPrice: 40000, discount: 25,
        description: 'Natural wood slab center framed with smoky grey resin edges, supported by sleek matte-black steel legs.',
    },
    {
        id: 13, category: 'Coffee Tables',
        images: [image23, image24, image25, image26, image27],
        title: 'Beach Crest Epoxy Art Table',
        originalPrice: 35000, discount: 25,
        description: 'Beach-inspired resin artwork — deep blue ocean waves blending into golden hardwood terrain.',
    },
    {
        id: 14, category: 'Dining Tables',
        images: [image28, image29, image30, image31, image32],
        title: 'Midnight Lagoon River Table',
        originalPrice: 45000, discount: 25,
        description: 'Stunning ocean-wave resin artwork merging with live-edge hardwood. A centerpiece that starts conversations.',
    },
    {
        id: 15, category: 'Dining Tables',
        images: [image001, image002, image003, image004],
        title: 'Midnight Lagoon River Dining Table',
        originalPrice: 41000, discount: 25,
        description: 'Beach-inspired ocean waves in rich blue resin flowing into golden hardwood — a true artisan masterpiece.',
    },
    {
        id: 16, category: 'Benches',
        images: [Bench06, Bench07, Bench08, Bench09, Bench10],
        title: 'Glass-Finish Wood Bench',
        originalPrice: 26000, discount: 20,
        description: 'Premium handcrafted wooden bench with a high-gloss mirror-like finish. Elegant and durable.',
    },
    {
        id: 17, category: 'Study Tables',
        images: [IM01, IM02, IM03, IM04, IM05, IM06, IM07],
        title: 'Glass & Wood Premium Study Table',
        originalPrice: 22000, discount: 25,
        description: 'Modern study table with glass-wood fusion design — perfect for home offices and studios.',
    },
    {
        id: 18, category: 'Coffee Tables',
        images: [R6, R7, R8],
        title: 'Natural Epoxy Table',
        originalPrice: 16000, discount: 25,
        description: 'Clean natural epoxy table for office and home. Simple, elegant, and built to last.',
    },
    {
        id: 19, category: 'Dining Tables',
        images: [image33, image34, image35, image36, image37],
        title: 'River Flow Signature Dining Table',
        originalPrice: 26000, discount: 20,
        description: 'Live-edge dining table with a stunning epoxy river flowing through the center. A true showpiece.',
    },
    {
        id: 20, category: 'Coffee Tables',
        images: [image38, image39],
        title: 'Glass-Look Natural Wood Table',
        originalPrice: 14000, discount: 20,
        description: 'Compact table with a glass-like resin surface over premium natural wood grain.',
    },
    {
        id: 21, category: 'Office Tables',
        images: [office01, office02],
        title: 'Premium Executive Office Table',
        originalPrice: 40000, discount: 20,
        description: 'Large executive office table with premium wood finish and ample workspace. Command your space.',
    },
];

const CATEGORIES = ['All', ...Array.from(new Set(ALL_PRODUCTS.map(p => p.category)))];

// ────────────────────────────────────────────────
const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = useMemo(() => {
        return ALL_PRODUCTS.filter(p => {
            const matchCat = activeCategory === 'All' || p.category === activeCategory;
            const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div style={{ background: '#FAF8F4', minHeight: '100vh' }}>

            {/* ── HERO BANNER ── */}
            <section
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #1a1208 0%, #2D2116 60%, #1a1208 100%)',
                    minHeight: '220px',
                    paddingTop: '80px',
                    paddingBottom: '40px',
                }}
            >
                {/* Decorative rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
                    style={{ border: '1.5px dashed #C9A961' }}
                />

                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ background: 'rgba(201,169,97,0.18)', color: '#C9A961' }}
                    >
                        Handcrafted with Love
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
                    >
                        Our{' '}
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #C9A961, #e8c97a, #C9A961)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Premium Collection
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/50 text-sm sm:text-base"
                    >
                        Designed for elegance. Crafted for eternity.
                    </motion.p>
                </div>
            </section>

            {/* ── STICKY FILTER + SEARCH BAR ── */}
            <div
                className="sticky top-0 z-40 py-3 px-4"
                style={{ background: 'rgba(250,248,244,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,169,97,0.18)' }}
            >
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
                    {/* Category pills */}
                    <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide w-full sm:w-auto">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                                style={
                                    activeCategory === cat
                                        ? { background: 'linear-gradient(135deg,#C9A961,#a0823d)', color: '#1a1208', boxShadow: '0 4px 12px rgba(201,169,97,0.35)' }
                                        : { background: '#fff', color: '#555', border: '1.5px solid rgba(201,169,97,0.3)' }
                                }
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full sm:w-64">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search products…"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 rounded-full text-sm outline-none"
                            style={{ border: '1.5px solid rgba(201,169,97,0.35)', background: '#fff', color: '#2D2D2D' }}
                        />
                    </div>
                </div>
            </div>

            {/* ── PRODUCT GRID ── */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

                {/* Result count */}
                <motion.p
                    key={filtered.length}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm mb-6"
                    style={{ color: '#8B6F47' }}
                >
                    Showing <strong>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
                    {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
                    {searchQuery ? ` matching "${searchQuery}"` : ''}
                </motion.p>

                {filtered.length === 0 ? (
                    <div className="text-center py-24">
                        <p className="text-4xl mb-4">🔍</p>
                        <p className="text-[#2D2D2D]/50 text-lg">No products found.</p>
                        <button
                            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                            className="mt-4 px-6 py-2 rounded-full text-sm font-semibold"
                            style={{ background: 'linear-gradient(135deg,#C9A961,#a0823d)', color: '#1a1208' }}
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filtered.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                delay={Math.min(index * 0.07, 0.5)}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* ── BOTTOM CTA ── */}
            <section
                className="py-12 sm:py-16 text-center px-4"
                style={{ background: 'linear-gradient(135deg, #2D2116, #1a1208)' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Don't see what you're looking for?
                    </h3>
                    <p className="text-white/50 mb-6 text-sm sm:text-base">
                        We do 100% custom orders. Tell us your vision and we'll build it.
                    </p>
                    <a
                        href="https://wa.me/919784842239?text=Hi%2C%20I%20want%20to%20place%20a%20custom%20order"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.span
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-3 px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg"
                            style={{
                                background: '#25D366',
                                color: '#fff',
                                boxShadow: '0 8px 25px rgba(37,211,102,0.4)',
                            }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Request Custom Order
                        </motion.span>
                    </a>
                </motion.div>
            </section>
        </div>
    );
};

export default ProductsPage;
