import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { key: 'welcome', to: '/' },
        { key: 'journey', to: '#journey' },
        { key: 'products', to: '#products' },
        { key: 'business_title', to: '#business' },
        { key: 'stories', to: '#testimonials' },
        { key: 'events', to: '#events' },
        { key: 'contact', to: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-3 ${scrolled
                    ? 'glass bg-white/90 border-b border-gray-200/50 shadow-sm backdrop-blur-xl'
                    : 'bg-white/40 backdrop-blur-md border-b border-white/20'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* --- Logo --- */}
                        <Link to="/" className="flex items-center group relative z-50">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tight text-gray-900 font-serif leading-tight">
                                    A. Rajeswari
                                </span>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 text-transparent bg-clip-text">
                                    Silver Director
                                </span>
                            </div>
                        </Link>

                        {/* --- Desktop Menu --- */}
                        <div className="hidden md:flex items-center gap-1">
                            <div className="flex items-center gap-1 rounded-full px-1.5 py-1 transition-all duration-500 bg-white/50 border border-gray-200/50 backdrop-blur-md shadow-sm">
                                {navLinks.filter(item => item.key !== 'welcome').map((item) => (
                                    <a
                                        key={item.key}
                                        href={item.to}
                                        className="relative px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 group overflow-hidden text-gray-700 hover:text-primary hover:bg-black/5 uppercase tracking-wide whitespace-nowrap"
                                    >
                                        <span className="relative z-10">{t(item.key)}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="ml-4 flex items-center gap-3">
                                <LanguageToggle />
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#contact"
                                    className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs shadow-lg transition-all bg-primary text-white hover:bg-primary-light shadow-primary/20"
                                >
                                    Join Now <ChevronRight size={14} />
                                </motion.a>
                            </div>
                        </div>

                        {/* --- Mobile Toggle --- */}
                        <div className="md:hidden flex items-center gap-4 relative z-50">
                            <LanguageToggle />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2.5 rounded-full transition-all duration-300 bg-white/50 text-gray-900 hover:bg-white border border-gray-200 backdrop-blur-md"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* --- Mobile Overlay Menu --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden flex flex-col pt-28 px-6"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((item, i) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        to={item.to}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-3xl font-bold text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
                                    >
                                        {t(item.key)}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2">
                                    Get Started <ChevronRight />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
