import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';


const LanguageToggle = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center space-x-2 bg-white/20 p-1 rounded-full backdrop-blur-sm border border-white/30">
            <button
                onClick={() => i18n.changeLanguage('en')}
                className={clsx(
                    "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                    i18n.language.startsWith('en')
                        ? "bg-primary text-white shadow-sm"
                        : "text-text-primary hover:bg-white/50"
                )}
            >
                EN
            </button>
            <button
                onClick={() => i18n.changeLanguage('te')}
                className={clsx(
                    "px-3 py-1 text-sm font-medium rounded-full transition-colors font-telugu", // ensuring font works
                    i18n.language.startsWith('te')
                        ? "bg-primary text-white shadow-sm"
                        : "text-text-primary hover:bg-white/50"
                )}
            >
                తెలుగు
            </button>
        </div>
    );
};

export default LanguageToggle;
