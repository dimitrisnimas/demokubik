import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import NotFoundPage from './NotFoundPage';
import { useTranslation } from '../i18n/I18nContext';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import Loader from '../components/Loader';

const ProjectDetailPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const { getProjectById } = useProjects();
    const { language, t } = useTranslation();
    
    const headerRef = useAnimateOnScroll<HTMLDivElement>();
    const contentRef = useAnimateOnScroll<HTMLDivElement>();
    const galleryRef = useAnimateOnScroll<HTMLDivElement>();

    const project = getProjectById(projectId || '');

    if (!project) {
        return <NotFoundPage />;
    }

    const projectTranslation = project.translations[language];

    const categoryMap = {
      'E-shop Development': t('categoryEshop'),
      'Website Creation': t('categoryWebsite'),
      'Technical Support': t('categorySupport'),
    };

    return (
        <>
            <div className="pt-32 pb-16 bg-kubik-gray">
                <div ref={headerRef} className="container mx-auto px-6">
                    <p className="text-kubik-purple font-semibold mb-2">{categoryMap[project.category]}</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">{projectTranslation.title}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mt-4">
                        {projectTranslation.description}
                    </p>
                </div>
            </div>

            <div className="py-20 sm:py-24 bg-kubik-dark">
                <div ref={contentRef} className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-4">{t('projectAbout')}</h2>
                        <p className="text-gray-300 mb-8 whitespace-pre-wrap">{projectTranslation.longDescription}</p>

                        <h2 className="text-2xl font-bold text-white mb-4">{t('projectChallenge')}</h2>
                        <p className="text-gray-300 mb-8 whitespace-pre-wrap">{projectTranslation.challenge}</p>

                        <h2 className="text-2xl font-bold text-white mb-4">{t('projectSolution')}</h2>
                        <p className="text-gray-300 whitespace-pre-wrap">{projectTranslation.solution}</p>
                    </div>
                    <aside className="lg:col-span-1">
                        <div className="bg-kubik-gray p-6 rounded-lg border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-4">{t('projectDetails')}</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li><strong>{t('projectClient')}:</strong> {project.client}</li>
                                <li><strong>{t('projectCategory')}:</strong> {categoryMap[project.category]}</li>
                                <li>
                                    <strong>{t('projectServicesProvided')}:</strong>
                                    <ul className="list-disc list-inside ml-2 mt-1">
                                        {projectTranslation.servicesProvided.map(s => <li key={s}>{s}</li>)}
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t('projectTech')}:</strong>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="bg-kubik-dark text-kubik-purple/80 text-xs font-semibold px-2 py-1 rounded-full">{tech}</span>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                            {project.websiteUrl && (
                                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="mt-6 bg-kubik-purple text-white font-bold py-3 px-6 rounded-full w-full text-center block hover:bg-kubik-purple/80 transition-colors duration-300">
                                    {t('projectVisitSite')}
                                </a>
                            )}
                        </div>
                    </aside>
                </div>
            </div>

            {project.galleryImages.length > 0 && (
                 <section ref={galleryRef} className="py-20 sm:py-24 bg-kubik-gray">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">{t('projectGallery')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {project.galleryImages.map((img, index) => (
                                <img key={index} src={img} alt={`${projectTranslation.title} gallery image ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover"/>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="py-12 bg-kubik-dark text-center">
                 <Link to="/" className="text-kubik-purple font-semibold hover:underline">
                    &larr; {t('projectBackHome')}
                </Link>
            </div>
        </>
    );
};

export default ProjectDetailPage;