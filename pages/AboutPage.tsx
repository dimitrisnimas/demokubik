import React from 'react';
import CTA from '../components/CTA';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { SparklesIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../i18n/I18nContext';


const AboutPage: React.FC = () => {
    const { t } = useTranslation();
    const headerRef = useAnimateOnScroll<HTMLDivElement>();
    const philosophyRef = useAnimateOnScroll<HTMLDivElement>();
    const valuesRef = useAnimateOnScroll<HTMLDivElement>();

    return (
        <>
            <div className="pt-32 pb-20 bg-kubik-gray">
                <div ref={headerRef} className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">{t('aboutTitle')}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4">
                        {t('aboutSubtitle')}
                    </p>
                </div>
            </div>

            <section ref={philosophyRef} className="py-20 sm:py-24 bg-kubik-dark">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">{t('aboutPhilosophyTitle')}</h2>
                        <p className="text-gray-300 mb-4">
                           {t('aboutPhilosophyP1')}
                        </p>
                        <p className="text-gray-300">
                           {t('aboutPhilosophyP2')}
                        </p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Team collaborating" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            <section ref={valuesRef} className="py-20 sm:py-24 bg-kubik-gray">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">{t('aboutValuesTitle')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-kubik-dark p-6 rounded-lg">
                            <LightBulbIcon className="w-12 h-12 text-kubik-purple mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white">{t('aboutValueInnovation')}</h3>
                            <p className="text-gray-400 mt-2">{t('aboutValueInnovationDesc')}</p>
                        </div>
                         <div className="bg-kubik-dark p-6 rounded-lg">
                           <UsersIcon className="w-12 h-12 text-kubik-purple mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white">{t('aboutValueCollaboration')}</h3>
                            <p className="text-gray-400 mt-2">{t('aboutValueCollaborationDesc')}</p>
                        </div>
                         <div className="bg-kubik-dark p-6 rounded-lg">
                            <SparklesIcon className="w-12 h-12 text-kubik-purple mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white">{t('aboutValueQuality')}</h3>
                            <p className="text-gray-400 mt-2">{t('aboutValueQualityDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
};

export default AboutPage;