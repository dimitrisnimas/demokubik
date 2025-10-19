import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { useTranslation } from '../i18n/I18nContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useAnimateOnScroll<HTMLDivElement>();
  const { language } = useTranslation();
  const projectTranslation = project.translations[language];
  const {t} = useTranslation();

  const categoryMap = {
    'E-shop Development': t('categoryEshop'),
    'Website Creation': t('categoryWebsite'),
    'Technical Support': t('categorySupport'),
  };

  return (
    <div ref={cardRef} className="bg-kubik-gray rounded-lg group relative p-0.5 bg-gradient-to-br from-kubik-purple/0 via-kubik-purple/0 to-kubik-purple/50 transition-all duration-300 hover:from-kubik-purple/50 hover:via-kubik-purple/20 hover:to-kubik-purple/50">
      <div className="bg-kubik-gray rounded-md p-6 h-full flex flex-col">
        <Link to={`/project/${project.id}`} className="block flex-grow">
          <div className="overflow-hidden rounded-md mb-4">
            <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src={project.imageUrl} alt={projectTranslation.title} />
          </div>
          <p className="text-sm text-kubik-purple font-semibold mb-2">{categoryMap[project.category]}</p>
          <h3 className="text-xl font-bold text-white mb-3">{projectTranslation.title}</h3>
          <p className="text-gray-400 text-sm mb-4 h-10">{projectTranslation.description}</p>
        </Link>
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800">
            {projectTranslation.servicesProvided.slice(0, 3).map(service => (
              <span key={service} className="bg-kubik-dark text-kubik-purple/80 text-xs font-semibold px-2.5 py-1 rounded-full">{service}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
