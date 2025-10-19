import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../context/ProjectContext';
import CTA from '../components/CTA';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { useTranslation } from '../i18n/I18nContext';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
// Fix: Import the 'Project' type to resolve the 'Cannot find name' error.
import { Project } from '../types';

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const heroRef = useAnimateOnScroll<HTMLDivElement>();
    return (
        <div ref={heroRef} className="bg-kubik-dark text-white text-center py-32 md:py-48 pt-48 md:pt-64 relative overflow-hidden">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
                src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-a-man-with-head-down-4251-large.mp4"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div 
                className="absolute inset-0 w-full h-full animate-lines-pan z-[15] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '3rem 3rem',
                }}
            />
            <div className="container mx-auto px-6 relative z-20">
                <h1 
                    className="text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in-up" 
                    style={{ animationDelay: '200ms' }}
                    dangerouslySetInnerHTML={{ __html: t('heroTitle') }}
                />
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    {t('heroSubtitle')}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <Link to="/services" className="w-full sm:w-auto text-center bg-kubik-purple text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-kubik-purple/80 transition-colors duration-300">
                        {t('heroButtonServices')}
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto text-center bg-transparent border-2 border-kubik-purple text-kubik-purple font-bold py-3 px-8 rounded-full text-lg hover:bg-kubik-purple hover:text-white transition-colors duration-300">
                        {t('heroButtonQuote')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

const AboutSection: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useAnimateOnScroll<HTMLDivElement>();

    return (
        <section ref={sectionRef} className="py-20 sm:py-24 bg-kubik-gray">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                     <img src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="KUBIK Agency Team" className="rounded-lg shadow-2xl shadow-kubik-purple/10" />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('aboutTitle')}</h2>
                    <p className="text-lg text-gray-300 mb-6">
                       {t('aboutSubtitle')}
                    </p>
                    <Link to="/about" className="text-kubik-purple font-semibold hover:underline flex items-center gap-2">
                        <span>Learn More About Us</span>
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}


const HomeProjectsSection: React.FC<{titleKey: string, subtitleKey: string, category: Project['category'], bgColor: string}> = ({ titleKey, subtitleKey, category, bgColor}) => {
    const { t } = useTranslation();
    const { projects } = useProjects();
    const sectionRef = useAnimateOnScroll<HTMLDivElement>();
    
    const filteredProjects = projects.filter(p => p.category === category).slice(0, 3);

    if (filteredProjects.length === 0) return null;

    return (
        <section ref={sectionRef} className={`py-20 sm:py-24 ${bgColor}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t(titleKey)}</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t(subtitleKey)}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/services" className="text-kubik-purple font-semibold hover:underline flex items-center justify-center gap-2">
                        <span>View All Our Work</span>
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <HomeProjectsSection 
                titleKey="homeEshopTitle" 
                subtitleKey="homeEshopSubtitle" 
                category="E-shop Development"
                bgColor="bg-kubik-dark"
            />
             <HomeProjectsSection 
                titleKey="homeWebsiteTitle" 
                subtitleKey="homeWebsiteSubtitle" 
                category="Website Creation"
                bgColor="bg-kubik-gray"
            />
            <HomeProjectsSection 
                titleKey="homeSupportTitle" 
                subtitleKey="homeSupportSubtitle" 
                category="Technical Support"
                bgColor="bg-kubik-dark"
            />
            <CTA />
        </>
    );
};

export default HomePage;