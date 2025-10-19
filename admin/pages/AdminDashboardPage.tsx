import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProjectAdmin } from '../contexts/ProjectAdminContext';
import { useTranslation } from '../../i18n/I18nContext';

const ExportComponent: React.FC = () => {
    const { projects } = useProjectAdmin();
    const [copied, setCopied] = useState(false);

    const exportData = `import { Project } from '../types';

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

    const handleCopy = () => {
        navigator.clipboard.writeText(exportData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-kubik-gray p-6 rounded-lg border border-yellow-500/50 mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Export & Publish</h2>
            <p className="text-gray-400 mb-4">To make your changes live, copy the text below and replace the entire content of the <code className="bg-kubik-dark px-1 py-0.5 rounded-md text-sm text-yellow-300">data/projectsData.ts</code> file in your project.</p>
            <div className="relative">
                <textarea
                    readOnly
                    value={exportData}
                    className="w-full h-64 bg-kubik-dark border border-gray-700 rounded-md p-3 text-white font-mono text-xs"
                />
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 bg-kubik-purple text-white font-bold py-1 px-3 rounded-md text-sm hover:bg-kubik-purple/80 transition-colors"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

const AdminDashboardPage: React.FC = () => {
    const { projects, deleteProject, loading } = useProjectAdmin();
    const { language } = useTranslation();

    const handleDelete = async (id: string, title: string) => {
        if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
            await deleteProject(id);
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">Manage Projects</h1>
                <Link to="/admin/projects/new" className="bg-kubik-purple text-white font-bold py-2 px-4 rounded-md hover:bg-kubik-purple/80 transition-colors">
                    Add New Project
                </Link>
            </div>
            
            {loading && projects.length === 0 && <p className="text-white">Loading projects...</p>}

            <div className="bg-kubik-gray rounded-lg overflow-hidden border border-gray-800">
                <table className="w-full text-left text-gray-300">
                    <thead className="bg-kubik-dark text-white uppercase text-sm">
                        <tr>
                            <th className="p-4">Title</th>
                            <th className="p-4 hidden md:table-cell">Category</th>
                            <th className="p-4 hidden sm:table-cell">Client</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project.id} className="border-t border-gray-800 hover:bg-kubik-dark/50">
                                <td className="p-4 font-medium">{project.translations[language]?.title || project.translations['en'].title}</td>
                                <td className="p-4 hidden md:table-cell">{project.category}</td>
                                <td className="p-4 hidden sm:table-cell">{project.client}</td>
                                <td className="p-4 space-x-4 text-right">
                                    <Link to={`/admin/projects/edit/${project.id}`} className="text-blue-400 hover:underline">Edit</Link>
                                    <button 
                                        onClick={() => handleDelete(project.id, project.translations[language]?.title || project.translations['en'].title)} 
                                        className="text-red-400 hover:underline"
                                        disabled={loading}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 {projects.length === 0 && !loading && <p className="text-center p-8">No projects found. Click "Add New Project" to get started.</p>}
            </div>
            <ExportComponent />
        </div>
    );
};

export default AdminDashboardPage;