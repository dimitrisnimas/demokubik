import React, { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { useTranslation } from '../i18n/I18nContext';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const headerRef = useAnimateOnScroll<HTMLDivElement>();
    const formRef = useAnimateOnScroll<HTMLDivElement>();
    const infoRef = useAnimateOnScroll<HTMLDivElement>();
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate form submission
        setTimeout(() => {
            setStatus('sent');
            (e.target as HTMLFormElement).reset();
             setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    return (
        <>
            <div className="pt-32 pb-16 bg-kubik-gray">
                <div ref={headerRef} className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">{t('contactTitle')}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4">
                        {t('contactSubtitle')}
                    </p>
                </div>
            </div>

            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
                    <div ref={formRef}>
                        <h2 className="text-3xl font-bold text-white mb-6">{t('contactFormTitle')}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 mb-2">{t('contactFormName')}</label>
                                <input type="text" id="name" name="name" required className="w-full bg-kubik-gray border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 mb-2">{t('contactFormEmail')}</label>
                                <input type="email" id="email" name="email" required className="w-full bg-kubik-gray border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 mb-2">{t('contactFormMessage')}</label>
                                <textarea id="message" name="message" rows={5} required className="w-full bg-kubik-gray border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={status === 'sending'} className="bg-kubik-purple text-white font-bold py-3 px-8 rounded-full hover:bg-kubik-purple/80 transition-colors duration-300 disabled:opacity-50">
                                    {status === 'sending' ? t('contactFormSending') : t('contactFormSend')}
                                </button>
                            </div>
                             {status === 'sent' && <p className="mt-4 text-green-400">{t('contactFormSuccess')}</p>}
                        </form>
                    </div>
                    <div ref={infoRef} className="text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6">{t('contactInfoTitle')}</h2>
                        <p className="mb-4">{t('contactInfoDescription')}</p>
                        <div className="space-y-4">
                            <p><strong>{t('contactInfoEmail')}:</strong> contact@kubik.agency</p>
                            <p><strong>{t('contactInfoPhone')}:</strong> +1 (555) 123-4567</p>
                            <p><strong>{t('contactInfoAddress')}:</strong> 123 Digital Avenue, Tech City, 12345</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;