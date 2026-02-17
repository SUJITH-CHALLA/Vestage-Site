import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Daily Zoom Meeting & Orientation",
            title_te: "రోజువారీ జూమ్ సమావేశం & ఓరియంటేషన్",
            date: "Daily, Online",
            location: "Zoom ID: 631 785 8117 | Pass: 123456",
            image: "https://placehold.co/600x400/2563EB/ffffff?text=Zoom+Meeting",
            type: "Upcoming",
            link: "https://us06web.zoom.us/j/6317858117?pwd=b7ZNbpWixPcKhSSwYoSNQoE9M9zlCf.1&omn=81506785363"
        },
        {
            id: 2,
            title: "Award Ceremony 2025",
            title_te: "అవార్డుల ప్రధానోత్సవం",
            date: "Last Month Highlights",
            location: "City Convention Center",
            image: "https://placehold.co/600x400/B45309/ffffff?text=Awards",
            type: "Completed"
        }
    ];

    return (
        <section id="events" className="py-20 bg-background-dark/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="text-center md:text-left w-full">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-bold tracking-widest uppercase text-xs"
                        >
                            Community
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-primary mt-2"
                        >
                            Active Events & Meetings
                        </motion.h2>
                        <p className="text-text-secondary mt-2 max-w-xl">
                            We are always here to support you. Join our regular meetings to learn and grow.
                        </p>
                    </div>

                    <a href="https://us06web.zoom.us/j/6317858117?pwd=b7ZNbpWixPcKhSSwYoSNQoE9M9zlCf.1&omn=81506785363" className="hidden md:flex bg-primary text-white px-6 py-3 rounded-full font-bold text-sm items-center gap-2 hover:bg-primary-light transition-colors whitespace-nowrap">
                        <Calendar size={16} /> Join Zoom Meeting
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
                            onClick={() => event.link && window.open(event.link, '_blank')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute top-4 left-4 z-20">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${event.type === 'Upcoming' ? 'bg-accent-green text-white' : 'bg-white/20 backdrop-blur-md text-white'
                                    }`}>
                                    {event.type}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                                <h3 className="text-2xl font-bold mb-1">{event.title_te}</h3>
                                <p className="text-sm text-gray-300 font-medium mb-4">{event.title}</p>

                                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-200">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-secondary" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-secondary" />
                                        {event.location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-secondary/10 rounded-2xl border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary/20 rounded-full text-secondary">
                            <Users size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary text-lg">Doubts? Need Support?</h4>
                            <p className="text-sm text-text-secondary">We conduct daily Zoom meetings and physical training sessions.</p>
                        </div>
                    </div>
                    <a href="tel:+919491236512" className="w-full md:w-auto px-6 py-3 bg-secondary text-white rounded-xl font-bold text-center hover:bg-secondary-light transition-colors">
                        Call Support Team
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Events;
