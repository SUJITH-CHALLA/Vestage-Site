import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Journey = () => {
    const { t } = useTranslation();

    return (
        <section id="journey" className="py-20 relative bg-background-paper overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Note Card Style */}
                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8 bg-secondary text-white p-4 rounded-full shadow-lg">
                            <Quote size={24} fill="currentColor" />
                        </div>

                        <div className="text-center mb-8 pt-4">
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('journey_subtitle')}</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">{t('journey_title')}</h2>
                            <div className="w-20 h-1 bg-secondary/30 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl font-light">
                            <p>
                                <span className="text-4xl font-serif text-secondary float-left mr-2 leading-none">"</span>
                                {t('journey_p1')}
                            </p>

                            <p>
                                {t('journey_p2')}
                            </p>

                            <p>
                                {t('journey_p3')}
                            </p>
                        </div>

                        <div className="mt-10 flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                            <div className="text-right">
                                <p className="font-bold text-primary text-xl font-serif">A. Rajeswari</p>
                                <p className="text-secondary text-xs font-bold uppercase tracking-wider">Silver Director</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                                <img src="/assets/images/leader.jpeg" alt="A. Rajeswari" className="w-full h-full object-cover object-top" />
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;
