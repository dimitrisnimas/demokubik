import { ElementType } from 'react';

export type Language = 'en' | 'el';

export interface ProjectTranslation {
    title: string;
    description: string;
    longDescription: string;
    challenge: string;
    solution: string;
    servicesProvided: string[];
}

export interface Project {
    id: string;
    imageUrl: string;
    category: 'E-shop Development' | 'Website Creation' | 'Technical Support';
    client: string;
    technologies: string[];
    websiteUrl?: string;
    galleryImages: string[];
    translations: {
        [key in Language]: ProjectTranslation;
    };
}

export interface Service {
    titleKey: string;
    descriptionKey: string;
    icon: ElementType;
    offeringsKey: string[];
}
