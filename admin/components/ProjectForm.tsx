import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Project, Language } from '../../types';
import { useProjectAdmin } from '../contexts/ProjectAdminContext';
import TagInput from './TagInput';

const emptyProject: Omit<Project, 'id'> = {
    imageUrl: '',
    category: 'Website Creation',
    client: '',
    technologies: [],
    websiteUrl: '',
    galleryImages: [],
    translations: {
        en: { title: '', description: '', longDescription: '', challenge: '', solution: '', servicesProvided: [] },
        el: { title: '', description: '', longDescription: '', challenge: '', solution: '', servicesProvided: [] }
    }
};


const ProjectForm: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const { getProject, addProject, updateProject, loading: contextLoading } = useProjectAdmin();
    const [project, setProject] = useState<Project | Omit<Project, 'id'>>(emptyProject);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isEditing = Boolean(projectId);

    useEffect(() => {
        if (isEditing && !contextLoading) {
            const existingProject = getProject(projectId as string);
            if (existingProject) {
                setProject(existingProject);
            }
        }
    }, [projectId, isEditing, getProject, contextLoading]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const handleTranslationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, lang: Language) => {
        const { name, value } = e.target;
        setProject(prev => ({
            ...prev,
            translations: {
                ...prev.translations,
                [lang]: {
                    ...prev.translations[lang],
                    [name]: value
                }
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (isEditing) {
            await updateProject(project as Project);
        } else {
            await addProject(project as Omit<Project, 'id'>);
        }
        setIsSubmitting(false);
        navigate('/admin/dashboard');
    };

    if (isEditing && contextLoading) {
        return <p className="text-white">Loading project data...</p>;
    }


    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-kubik-gray p-6 rounded-lg border border-gray-800">
                 <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="client" className="block text-gray-300 mb-2">Client</label>
                        <input type="text" id="client" name="client" value={project.client} onChange={handleChange} required className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple" />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-gray-300 mb-2">Category</label>
                        <select id="category" name="category" value={project.category} onChange={handleChange} className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple">
                            <option value="Website Creation">Website Creation</option>
                            <option value="E-shop Development">E-shop Development</option>
                            <option value="Technical Support">Technical Support</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="imageUrl" className="block text-gray-300 mb-2">Main Image URL</label>
                        <input type="url" id="imageUrl" name="imageUrl" value={project.imageUrl} onChange={handleChange} required className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple" />
                    </div>
                     <div>
                        <label htmlFor="websiteUrl" className="block text-gray-300 mb-2">Website URL (Optional)</label>
                        <input type="url" id="websiteUrl" name="websiteUrl" value={project.websiteUrl || ''} onChange={handleChange} className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple" />
                    </div>
                    <div className="md:col-span-2">
                        <TagInput tags={project.technologies} setTags={(tags) => setProject(p => ({...p, technologies: tags}))} label="Technologies" id="technologies" />
                    </div>
                 </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {(['en', 'el'] as const).map(lang => (
                    <div key={lang} className="bg-kubik-gray p-6 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-bold text-white mb-6">Content ({lang.toUpperCase()})</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor={`title-${lang}`} className="block text-gray-300 mb-2">Title</label>
                                <input type="text" id={`title-${lang}`} name="title" value={project.translations[lang].title} onChange={(e) => handleTranslationChange(e, lang)} required className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple" />
                            </div>
                            <div>
                                <label htmlFor={`description-${lang}`} className="block text-gray-300 mb-2">Short Description</label>
                                <textarea id={`description-${lang}`} name="description" value={project.translations[lang].description} onChange={(e) => handleTranslationChange(e, lang)} rows={2} required className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple"></textarea>
                            </div>
                            <div>
                                <label htmlFor={`longDescription-${lang}`} className="block text-gray-300 mb-2">Long Description</label>
                                <textarea id={`longDescription-${lang}`} name="longDescription" value={project.translations[lang].longDescription} onChange={(e) => handleTranslationChange(e, lang)} rows={4} required className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple"></textarea>
                            </div>
                             <div>
                                <label htmlFor={`challenge-${lang}`} className="block text-gray-300 mb-2">The Challenge</label>
                                <textarea id={`challenge-${lang}`} name="challenge" value={project.translations[lang].challenge} onChange={(e) => handleTranslationChange(e, lang)} rows={3} required className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple"></textarea>
                            </div>
                            <div>
                                <label htmlFor={`solution-${lang}`} className="block text-gray-300 mb-2">The Solution</label>
                                <textarea id={`solution-${lang}`} name="solution" value={project.translations[lang].solution} onChange={(e) => handleTranslationChange(e, lang)} rows={3} required className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple"></textarea>
                            </div>
                             <div className="md:col-span-2">
                                <TagInput tags={project.translations[lang].servicesProvided} setTags={(tags) => setProject(p => ({...p, translations: {...p.translations, [lang]: {...p.translations[lang], servicesProvided: tags}} }))} label="Services Provided" id={`services-${lang}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <button type="submit" disabled={contextLoading || isSubmitting} className="bg-kubik-purple text-white font-bold py-3 px-8 rounded-full hover:bg-kubik-purple/80 transition-colors duration-300 disabled:opacity-50">
                    {isSubmitting ? 'Saving...' : (isEditing ? 'Update Project' : 'Create Project')}
                </button>
            </div>
        </form>
    );
};

export default ProjectForm;