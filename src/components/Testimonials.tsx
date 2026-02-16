import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const stories = [
        {
            id: 1,
            name: "Ramesh Kumar",
            role: "Silver Director",
            location: "Hanamkonda",
            quote: "Thanks to Vestige products, my health improved significantly. I started part-time and now earn more than my job.",
            image: "https://placehold.co/150x150/1e293b/ffffff?text=Ramesh",
            quote_te: "నేను సాధారణ రైతుని. వెస్టీజ్ ద్వారా నా జీవితం మారింది. ఇప్పుడు నెలకు 50 వేలు సంపాదిస్తున్నాను.",
            quote_en: "I am a simple farmer. Vestige changed my life. Now earning 50k/month."
        },
        {
            id: 2,
            name: "Sujatha & Ravi",
            role: "Crown Directors",
            location: "Karimnagar",
            image: "https://placehold.co/150x150/1e293b/ffffff?text=Couple",
            quote_te: "మా కుటుంబ ఆరోగ్యం మరియు ఆదాయం రెండూ వెస్టీజ్ వల్ల బాగున్నాయి. కార్ ఫండ్ ద్వారా కారు కొన్నాము.",
            quote_en: "Our family health and income improved. Bought a car via Car Fund."
        },
        {
            id: 3,
            name: "Lakshmi Devi",
            role: "Star Director",
            location: "Nalgonda",
            image: "https://placehold.co/150x150/1e293b/ffffff?text=Lakshmi",
            quote_te: "ఇంటి వద్దే ఉంటూ వ్యాపారం చేస్తున్నాను. నా పిల్లల చదువులకు లోటు లేదు.",
            quote_en: "Doing business from home. No shortage for my children's education."
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-widest uppercase text-xs"
                    >
                        Real Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4"
                    >
                        Success Stories
                    </motion.h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 border border-gray-100 p-8 rounded-3xl relative hover:shadow-xl transition-shadow"
                        >
                            <Quote className="absolute top-8 right-8 text-secondary/20" size={40} />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
                                />
                                <div>
                                    <h3 className="font-bold text-lg text-primary">{story.name}</h3>
                                    <p className="text-xs font-bold text-secondary uppercase tracking-wider">{story.role}</p>
                                    <p className="text-xs text-gray-500">{story.location}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-2 leading-relaxed">
                                "{story.quote_te}"
                            </p>
                            <p className="text-xs text-gray-400 font-medium">
                                {story.quote_en}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
