import { motion } from 'framer-motion';
import { ShoppingBag, Star, Leaf, Heart, Sparkles, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductSection = ({ title, title_te, icon: Icon, products, indexOffset = 0 }: any) => {
    return (
        <div className="mb-16 last:mb-0">
            <div className="flex items-center gap-3 mb-8 px-2">
                <div className="p-3 bg-secondary/10 text-secondary rounded-full">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary">{title}</h3>
                    <p className="text-sm text-text-secondary font-medium">{title_te}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {products.map((product: any, index: number) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index + indexOffset) * 0.05 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg hover:border-secondary/30 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="relative aspect-square overflow-hidden bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-primary shadow-sm border border-gray-100">
                                {product.price}
                            </div>
                        </div>

                        <div className="p-3 flex flex-col flex-grow">
                            <div className="text-[10px] text-secondary font-bold uppercase tracking-wider mb-1 line-clamp-1">
                                {product.category}
                            </div>
                            <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5em]">
                                {product.name}
                            </h3>
                            <p className="text-xs text-gray-500 mb-3 font-medium line-clamp-1">
                                {product.name_te}
                            </p>

                            <div className="mt-auto">
                                <a
                                    href="https://wa.me/919491236512?text=I want to buy multiple products"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full py-2 bg-gray-50 hover:bg-primary hover:text-white text-gray-700 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 border border-gray-200 hover:border-primary"
                                >
                                    <ShoppingBag size={14} /> Buy Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Products = () => {
    const { t } = useTranslation();

    const householdProducts = [
        { id: 1, name: "Premium Soap", name_te: "ప్రీమియం సబ్బు", image: "https://placehold.co/300x300/e2e8f0/1F3A8A?text=Soap", price: "₹45", category: "Personal Care" },
        { id: 2, name: "Cooking Oil", name_te: "వంట నూనె", image: "https://placehold.co/300x300/fef3c7/B45309?text=Oil", price: "₹180", category: "Kitchen" },
        { id: 3, name: "Herbal Toothpaste", name_te: "హెర్బల్ పేస్ట్", image: "https://placehold.co/300x300/ecfdf5/047857?text=Paste", price: "₹75", category: "Oral Care" },
        { id: 4, name: "Assure Tea", name_te: "టీ పొడి", image: "https://placehold.co/300x300/fff7ed/7c2d12?text=Tea", price: "₹120", category: "Beverages" },
        { id: 5, name: "Dish Wash Liquid", name_te: "డిష్ వాష్", image: "https://placehold.co/300x300/f0f9ff/0284c7?text=Dish+Wash", price: "₹90", category: "Home Care" },
        { id: 6, name: "Detergent Powder", name_te: "సర్ఫ్ పౌడర్", image: "https://placehold.co/300x300/eff6ff/1e40af?text=Detergent", price: "₹160", category: "Laundry" },
    ];

    const agricultureProducts = [
        { id: 11, name: "Agri 82", name_te: "అగ్రి 82", image: "https://placehold.co/300x300/f0fdf4/166534?text=Agri+82", price: "₹350", category: "Activator" },
        { id: 12, name: "Agri Humic", name_te: "హ్యూమిక్", image: "https://placehold.co/300x300/3f2c22/ffffff?text=Humic", price: "₹450", category: "Growth" },
        { id: 13, name: "Agri Moss", name_te: "అగ్రి మాస్", image: "https://placehold.co/300x300/dcfce7/15803d?text=Moss", price: "₹400", category: "Fertility" },
        { id: 14, name: "Agri Gold", name_te: "అగ్రి గోల్డ్", image: "https://placehold.co/300x300/fefce8/ca8a04?text=Gold", price: "₹600", category: "Yield" },
        { id: 15, name: "Agri Nanotek", name_te: "నానోటెక్", image: "https://placehold.co/300x300/e0f2fe/0369a1?text=Nanotek", price: "₹550", category: "Micronutrients" },
        { id: 16, name: "Agri Protect", name_te: "ప్రొటెక్ట్", image: "https://placehold.co/300x300/fee2e2/991b1b?text=Protect", price: "₹700", category: "Fungicide" },
    ];

    const skincareProducts = [
        { id: 21, name: "Face Wash", name_te: "ఫేస్ వాష్", image: "https://placehold.co/300x300/fff1f2/be123c?text=Face+Wash", price: "₹180", category: "Cleanser" },
        { id: 22, name: "Night Cream", name_te: "నైట్ క్రీమ్", image: "https://placehold.co/300x300/fdf4ff/86198f?text=Night+Cream", price: "₹250", category: "Repair" },
        { id: 23, name: "Sunscreen SPF 30", name_te: "సన్ స్క్రీన్", image: "https://placehold.co/300x300/fff7ed/ea580c?text=Sunscreen", price: "₹220", category: "Protection" },
        { id: 24, name: "Anti-Aging Cream", name_te: "యాంటీ ఏజింగ్", image: "https://placehold.co/300x300/faf5ff/6b21a8?text=Anti+Aging", price: "₹350", category: "Treatment" },
        { id: 25, name: "BB Cream", name_te: "బిబి క్రీమ్", image: "https://placehold.co/300x300/fcf4ed/78350f?text=BB+Cream", price: "₹190", category: "Makeup" },
        { id: 26, name: "Body Lotion", name_te: "బాడీ లోషన్", image: "https://placehold.co/300x300/ecfeff/0e7490?text=Lotion", price: "₹200", category: "Moisturizer" },
    ];

    const nutritionProducts = [
        { id: 31, name: "Spirulina", name_te: "స్పిరులినా", image: "https://placehold.co/300x300/ecfccb/365314?text=Spirulina", price: "₹350", category: "Immunity" },
        { id: 32, name: "Noni Capsules", name_te: "నోని", image: "https://placehold.co/300x300/f0fdf4/15803d?text=Noni", price: "₹450", category: "Detox" },
        { id: 33, name: "Flax Oil", name_te: "ఫ్లాక్స్ ఆయిల్", image: "https://placehold.co/300x300/fef3c7/b45309?text=Flax+Oil", price: "₹500", category: "Heart Health" },
        { id: 34, name: "Calcium", name_te: "కాల్షియం", image: "https://placehold.co/300x300/f8fafc/475569?text=Calcium", price: "₹250", category: "Bones" },
        { id: 35, name: "Protein Powder", name_te: "ప్రోటీన్ పౌడర్", image: "https://placehold.co/300x300/7f1d1d/ffffff?text=Protein", price: "₹800", category: "Fitness" },
        { id: 36, name: "Aloe Vera", name_te: "అలోవెరా", image: "https://placehold.co/300x300/dcfce7/166534?text=Aloe", price: "₹280", category: "Digestion" },
    ];

    return (
        <section id="products" className="py-20 bg-background-dark/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-widest uppercase text-xs"
                    >
                        Category Showcase
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4"
                    >
                        {t('products')}
                    </motion.h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4" />
                    <p className="text-text-secondary max-w-xl mx-auto">
                        High quality international products for every aspect of your life.
                    </p>
                </div>

                <ProductSection
                    title="Home Essentials"
                    title_te="ఇంటి అవసరాలకు"
                    icon={Home}
                    products={householdProducts}
                />

                <ProductSection
                    title="Agriculture"
                    title_te="వ్యవసాయ ఉత్పత్తులు"
                    icon={Leaf}
                    products={agricultureProducts}
                    indexOffset={1}
                />

                <ProductSection
                    title="Skincare & Beauty"
                    title_te="చర్మ సౌందర్యం"
                    icon={Sparkles}
                    products={skincareProducts}
                    indexOffset={2}
                />

                <ProductSection
                    title="Nutrition & Supplements"
                    title_te="ఆరోగ్యం మరియు పోషకాహారం"
                    icon={Heart}
                    products={nutritionProducts}
                    indexOffset={3}
                />

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-full font-bold shadow-lg hover:bg-secondary-light transition-colors text-sm">
                        <Star size={16} fill="currentColor" /> View All Categories
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;
