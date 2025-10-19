import { Service } from '../types';
import { CodeBracketIcon, ShoppingCartIcon, DevicePhoneMobileIcon, MegaphoneIcon, PencilSquareIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

export const allServices: Service[] = [
    { 
        titleKey: 'serviceTitleWebsiteCreation', 
        descriptionKey: 'serviceDescriptionWebsiteCreation', 
        icon: CodeBracketIcon,
        offeringsKey: ['serviceOfferingCustomDesign', 'serviceOfferingResponsiveDev', 'serviceOfferingCMS', 'serviceOfferingPerformance']
    },
    { 
        titleKey: 'serviceTitleEshop', 
        descriptionKey: 'serviceDescriptionEshop', 
        icon: ShoppingCartIcon,
        offeringsKey: ['serviceOfferingShopify', 'serviceOfferingWooCommerce', 'serviceOfferingCustomEcom', 'serviceOfferingPayment']
    },
    { 
        titleKey: 'serviceTitleCustomApps', 
        descriptionKey: 'serviceDescriptionCustomApps', 
        icon: DevicePhoneMobileIcon,
        offeringsKey: ['serviceOfferingIOSAndroid', 'serviceOfferingReactNative', 'serviceOfferingBackend', 'serviceOfferingPWA']
    },
    { 
        titleKey: 'serviceTitleUIUX', 
        descriptionKey: 'serviceDescriptionUIUX', 
        icon: PencilSquareIcon,
        offeringsKey: ['serviceOfferingUserResearch', 'serviceOfferingWireframing', 'serviceOfferingUIDesign', 'serviceOfferingInteraction']
    },
    { 
        titleKey: 'serviceTitleSocialMedia', 
        descriptionKey: 'serviceDescriptionSocialMedia', 
        icon: MegaphoneIcon,
        offeringsKey: ['serviceOfferingSocialStrategy', 'serviceOfferingContentCreation', 'serviceOfferingSEO', 'serviceOfferingAnalytics']
    },
    { 
        titleKey: 'serviceTitleSupport', 
        descriptionKey: 'serviceDescriptionSupport', 
        icon: LifebuoyIcon,
        offeringsKey: ['serviceOfferingMaintenance', 'serviceOfferingCloud', 'serviceOfferingSecurity', 'serviceOffering247Support']
    },
];
