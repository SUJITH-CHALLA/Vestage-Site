import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import VoicePlayer from '../components/VoicePlayer';
import Products from '../components/Products';
import Journey from '../components/Journey';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import { Phone, MessageCircle, ShoppingBag, Users, Coins, ChevronDown, Volume2, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import LogoFlow from '../components/LogoFlow';

const Home = () => {
    const { t } = useTranslation();

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const steps = [
        {
            key: 'step1',
            icon: <ShoppingBag size={32} />,
            gradient: "from-blue-500 to-blue-700",
            desc: "Order high-quality daily essentials directly."
        },
        {
            key: 'step2',
            icon: <Users size={32} />,
            gradient: "from-purple-500 to-purple-700",
            desc: "Use the products and verify quality."
        },
        {
            key: 'step3',
            icon: <Coins size={32} />,
            gradient: "from-secondary to-yellow-600",
            desc: "Share your experience and earn commissions."
        },
    ];

    return (
        <Layout>
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden bg-background text-text-primary pt-6 pb-10 md:pb-12 md:pt-16">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-white to-secondary-bg opacity-80"></div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full border border-secondary/10 opacity-60"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] rounded-full border border-secondary/5 opacity-40"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center md:text-left space-y-2 md:space-y-4"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-light font-bold text-[10px] tracking-widest uppercase mb-1 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                            Silver Director
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-primary">
                            <span className="block drop-shadow-sm">
                                {t('welcome')}
                            </span>
                            <span className="block text-sm md:text-lg text-text-secondary font-medium mt-2 italic max-w-md mx-auto md:mx-0 leading-relaxed">
                                "{t('tagline')}"
                            </span>
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="glass w-full max-w-[280px] p-2 rounded-xl border border-white/60 bg-white/50 backdrop-blur-xl shadow-lg mx-auto md:mx-0 mt-3 ring-1 ring-black/5">
                            <div className="flex flex-col gap-2">
                                <VoicePlayer src="/assets/audio/intro_te.mp3" label={t('listen_te')} />
                                <VoicePlayer src="/assets/audio/intro_en.mp3" label={t('listen_en')} />
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex flex-col w-full sm:flex-row gap-3 justify-center md:justify-start pt-2">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="tel:+919491236512"
                                className="w-full sm:w-auto px-6 py-3 bg-accent-green text-white font-bold rounded-xl shadow-lg shadow-accent-green/20 flex items-center justify-center gap-2 hover:bg-[#1DA851] transition-colors text-base"
                            >
                                <Phone size={20} className="animate-pulse" />
                                {t('call_now')}
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#business"
                                className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 text-primary font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center text-base"
                            >
                                Learn More <ChevronDown className="ml-1" size={20} />
                            </motion.a>
                        </motion.div>

                    </motion.div>

                    {/* Mobile Fixed Bottom Bar (App-like feel) */}
                    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden z-50 flex gap-3">
                        <a href="tel:+919491236512" className="flex-1 bg-accent-green text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg">
                            <Phone size={20} /> {t('call_now')}
                        </a>
                        <a href="https://wa.me/919491236512" className="bg-[#25D366]/10 text-[#25D366] font-bold p-3 rounded-xl flex items-center justify-center">
                            <MessageCircle size={24} />
                        </a>
                    </div>

                    {/* Mobile Floating Zoom Button */}


                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative block mt-4 md:mt-0"
                    >
                        <div className="relative w-[240px] h-[320px] md:w-[300px] md:h-[380px] mx-auto">
                            <div className="absolute top-4 -right-4 w-full h-full border border-secondary/20 rounded-[1.5rem] z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-[1.5rem] -z-10"></div>

                            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-xl border border-white/40 bg-white z-10 group">
                                <img
                                    src="/assets/images/leader.jpeg"
                                    alt="A. Rajeswari"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-white font-bold text-lg leading-none">A. Rajeswari</h3>
                                        <p className="text-secondary-light text-[10px] font-bold uppercase tracking-wider mt-1">Silver Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Curve */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
                    </svg>
                </div>


                {/* Logo Flow */}
                <div className="w-full z-30 mt-8 md:mt-12 relative">
                    <LogoFlow />
                </div>
            </section>

            <Journey />
            <Products />

            {/* --- BUSINESS MODEL SECTION --- */}
            <section id="business" className="py-24 bg-background relative z-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-bold tracking-widest uppercase text-sm"
                        >
                            Simple Process
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6"
                        >
                            {t('business_title')}
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-1 bg-secondary mx-auto rounded-full"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 z-0 dashed-line"></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="relative z-10 group"
                            >
                                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center h-full relative overflow-hidden">
                                    {/* Step Number Background */}
                                    <span className="absolute -top-6 -right-6 text-9xl font-bold text-gray-50 opacity-50 select-none group-hover:text-primary/5 transition-colors duration-500">
                                        {index + 1}
                                    </span>

                                    {/* Icon Container */}
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{t(step.key)}</h3>
                                    <p className="text-gray-500 leading-relaxed mb-6">{step.desc}</p>

                                    {/* Audio Guide Placeholder */}
                                    <button className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors">
                                        <Volume2 size={16} /> Listen Explanation
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* --- BUSINESS MODEL SECTION --- */}
                {/* ... (existing section) ... */}
            </section>

            <Testimonials />
            <Events />

            {/* --- CTA / CONTACT --- */}
            <section id="contact" className="py-20 px-4 bg-primary text-white relative overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        Ready to Change Your Life?
                    </motion.h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://wa.me/919491236512"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-3 hover:bg-[#1ebd59] transition-all"
                        >
                            <MessageCircle size={24} />
                            {t('whatsapp')} Now
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="tel:+919491236512"
                            className="w-full sm:w-auto px-8 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all"
                        >
                            <Phone size={24} />
                            {t('call_now')}
                        </motion.a>
                    </div>
                </div>
            </section>
            {/* Mobile Floating Zoom Button */}
            <motion.a
                href="https://us06web.zoom.us/j/6317858117?pwd=b7ZNbpWixPcKhSSwYoSNQoE9M9zlCf.1&omn=81506785363"
                target="_blank"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="fixed bottom-24 right-4 z-[60] md:hidden bg-primary text-white px-4 py-2 rounded-full shadow-lg shadow-primary/30 flex items-center gap-2 border border-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Video size={16} className="animate-pulse" />
                <span className="font-bold text-xs">Join Now</span>
            </motion.a>
        </Layout >
    );
};

export default Home;
