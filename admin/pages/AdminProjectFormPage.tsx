import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';

const AdminProjectFormPage: React.FC = () => {
    const { projectId } = useParams<{ projectId?: string }>();
    const isEditing = Boolean(projectId);

    return (
        <div>
            <div className="mb-6">
                 <Link to="/admin/dashboard" className="text-kubik-purple hover:underline">
                    &larr; Back to Dashboard
                </Link>
            </div>
            <h1 className="text-3xl font-bold text-white mb-6">
                {isEditing ? 'Edit Project' : 'Create New Project'}
            </h1>
            <ProjectForm />
        </div>
    );
};

export default AdminProjectFormPage;
