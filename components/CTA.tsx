import React from 'react';
import { Link } from 'react-router-dom';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { useTranslation } from '../i18n/I18nContext';

const CTA: React.FC = () => {
    const sectionRef = useAnimateOnScroll<HTMLDivElement>();
    const { t } = useTranslation();
    
    return (
        <section ref={sectionRef} className="py-20 sm:py-32 bg-gradient-to-r from-kubik-dark via-kubik-gray to-kubik-dark">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    {t('ctaDescription')}
                </p>
                <Link to="/contact" className="bg-kubik-purple text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-kubik-purple/80 transition-colors duration-300 inline-block">
                    {t('ctaButton')}
                </Link>
            </div>
        </section>
    );
};

export default CTA;
