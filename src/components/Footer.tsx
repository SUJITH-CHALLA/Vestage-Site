import { useTranslation } from 'react-i18next';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-primary text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Vestige Leader</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering lives through health and wealth. Join the Vestige family today.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
                        <div className="space-y-2">
                            <a href="tel:+919876543210" className="flex items-center text-gray-300 hover:text-white">
                                <Phone size={18} className="mr-2" /> +91 98765 43210
                            </a>
                            <div className="flex items-center text-gray-300">
                                <MapPin size={18} className="mr-2" /> Village Name, Mandal, District
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('disclaimer')}</h3>
                        <p className="text-xs text-gray-400">
                            Disclaimer: Independent Distributor. Not an official company website.
                            Income depends on sales and effort.
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Vestige Leadership Platform. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
