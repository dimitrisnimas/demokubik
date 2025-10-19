import React from 'react';
import { Service } from '../types';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../i18n/I18nContext';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const cardRef = useAnimateOnScroll<HTMLDivElement>();
    const { t } = useTranslation();
    const Icon = service.icon;

    return (
        <div ref={cardRef} className="bg-kubik-gray rounded-lg p-0.5 group relative overflow-hidden bg-gradient-to-br from-kubik-purple/0 via-kubik-purple/0 to-kubik-purple/50 transition-all duration-300 hover:from-kubik-purple/50 hover:via-kubik-purple/20 hover:to-kubik-purple/50">
             <div className="bg-kubik-gray rounded-md p-8 h-full">
                <div className="text-kubik-purple mb-4 inline-block">
                    <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t(service.titleKey)}</h3>
                <p className="text-gray-400 mb-6">{t(service.descriptionKey)}</p>
                 <ul className="space-y-3 text-left text-gray-300">
                    {service.offeringsKey.map((offerKey) => (
                        <li key={offerKey} className="flex items-start">
                            <CheckIcon className="w-5 h-5 text-kubik-purple mr-3 mt-1 flex-shrink-0" />
                            <span>{t(offerKey)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceCard;
