import { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface VoicePlayerProps {
    src: string;
    label: string;
    className?: string;
}

const VoicePlayer: React.FC<VoicePlayerProps> = ({ src, label, className }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                document.querySelectorAll('audio').forEach(el => {
                    if (el !== audioRef.current) {
                        el.pause();
                    }
                });
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onEnded = () => setIsPlaying(false);
        const onPause = () => setIsPlaying(false);
        const onPlay = () => setIsPlaying(true);

        audio.addEventListener('ended', onEnded);
        audio.addEventListener('pause', onPause);
        audio.addEventListener('play', onPlay);

        return () => {
            audio.removeEventListener('ended', onEnded);
            audio.removeEventListener('pause', onPause);
            audio.removeEventListener('play', onPlay);
        };
    }, []);

    return (
        <div className={clsx("flex flex-col items-center", className)}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className={clsx(
                    "relative w-full max-w-[250px] flex items-center p-1.5 rounded-full overflow-hidden transition-all duration-300 shadow-md border border-white/20 group",
                    isPlaying
                        ? "bg-gradient-to-r from-accent-green to-emerald-600 ring-2 ring-emerald-200"
                        : "bg-white/95 hover:bg-white ring-1 ring-white/50"
                )}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying && (
                    <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}

                <div className={clsx(
                    "w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors z-10",
                    isPlaying ? "bg-white text-emerald-600" : "bg-primary text-white group-hover:bg-primary-dark"
                )}>
                    {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
                </div>

                <div className="flex-1 px-3 text-left z-10 overflow-hidden min-w-0">
                    <span className={clsx(
                        "block text-xs font-bold tracking-wide uppercase truncate",
                        isPlaying ? "text-white" : "text-gray-800"
                    )}>
                        {label}
                    </span>
                    <span className={clsx(
                        "block text-[9px] uppercase tracking-wider font-semibold opacity-70",
                        isPlaying ? "text-white" : "text-gray-500"
                    )}>
                        {isPlaying ? "Playing..." : "Tap to Listen"}
                    </span>
                </div>

                {/* Mini Visualizer */}
                <div className="flex items-end space-x-0.5 h-4 mr-2 opacity-50 shrink-0">
                    {[1, 2, 3, 2].map((_, i) => (
                        <motion.div
                            key={i}
                            className={clsx("w-0.5 rounded-t-sm", isPlaying ? "bg-white" : "bg-primary")}
                            animate={isPlaying ? { height: [3, 10, 3] } : { height: 3 }}
                            transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>

            </motion.button>
            <audio ref={audioRef} src={src} preload="none" />
        </div>
    );
};

export default VoicePlayer;
