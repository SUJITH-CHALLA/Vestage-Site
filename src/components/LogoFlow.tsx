import { motion } from 'framer-motion';

const LogoFlow = () => {
    return (
        <div className="w-full overflow-hidden bg-primary/5 py-2 border-t border-b border-primary/10 relative z-0">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex items-center mx-6">
                        <span className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 opacity-60 uppercase font-serif tracking-widest">
                            Vestige
                        </span>
                        <span className="text-xs text-secondary mx-3">★</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoFlow;
