import React from 'react';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { allServices } from '../data/services';
import { useTranslation } from '../i18n/I18nContext';

const technologies = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Shopify', 'WooCommerce', 'React Native', 'AWS', 'Sanity CMS', 'Figma'
];

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();
    const headerRef = useAnimateOnScroll<HTMLDivElement>();
    const servicesRef = useAnimateOnScroll<HTMLDivElement>();
    const techRef = useAnimateOnScroll<HTMLDivElement>();

    return (
        <>
            <div className="pt-32 pb-16 bg-kubik-gray">
                <div ref={headerRef} className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">{t('servicesTitle')}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4">
                        {t('servicesSubtitle')}
                    </p>
                </div>
            </div>
            
            <section ref={servicesRef} className="py-20 sm:py-24 bg-kubik-dark">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map(service => <ServiceCard key={service.titleKey} service={service} />)}
                    </div>
                </div>
            </section>

            <section ref={techRef} className="py-20 sm:py-24 bg-kubik-gray">
                 <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('techStackTitle')}</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                       {t('techStackSubtitle')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {technologies.map(tech => (
                             <div key={tech} className="bg-kubik-dark text-gray-300 font-medium py-2 px-5 rounded-full border border-gray-700">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
};

export default ServicesPage;