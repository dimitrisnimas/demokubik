import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Project } from '../../types';
import { projects as initialProjects } from '../../data/projectsData';

// Simple in-memory/localStorage store for projects
const getProjectsFromStorage = (): Project[] => {
    try {
        const stored = localStorage.getItem('adminProjects');
        if (stored) return JSON.parse(stored);
    } catch (error) {
        console.error("Failed to parse projects from localStorage", error);
    }
    // Initialize storage if it's empty or corrupted
    localStorage.setItem('adminProjects', JSON.stringify(initialProjects));
    return initialProjects;
};

const saveProjectsToStorage = (projects: Project[]) => {
    try {
        localStorage.setItem('adminProjects', JSON.stringify(projects));
    } catch (error) {
        console.error("Failed to save projects to localStorage", error);
    }
};

interface ProjectAdminContextType {
    projects: Project[];
    getProject: (id: string) => Project | undefined;
    addProject: (project: Omit<Project, 'id'>) => Promise<void>;
    updateProject: (project: Project) => Promise<void>;
    deleteProject: (id: string) => Promise<void>;
    loading: boolean;
}

const ProjectAdminContext = createContext<ProjectAdminContextType | undefined>(undefined);

export const useProjectAdmin = () => {
    const context = useContext(ProjectAdminContext);
    if (!context) {
        throw new Error("useProjectAdmin must be used within a ProjectAdminProvider");
    }
    return context;
};

export const ProjectAdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProjects(getProjectsFromStorage());
        setLoading(false);
    }, []);


    const getProject = (id: string) => projects.find(p => p.id === id);

    const addProject = (project: Omit<Project, 'id'>): Promise<void> => {
        return new Promise(resolve => {
            setLoading(true);
            setTimeout(() => { // simulate async
                const newProjects = [...projects, { ...project, id: `project-${Date.now()}` }];
                setProjects(newProjects);
                saveProjectsToStorage(newProjects);
                setLoading(false);
                resolve();
            }, 500);
        });
    };

    const updateProject = (updatedProject: Project): Promise<void> => {
        return new Promise(resolve => {
            setLoading(true);
            setTimeout(() => {
                const newProjects = projects.map(p => p.id === updatedProject.id ? updatedProject : p);
                setProjects(newProjects);
                saveProjectsToStorage(newProjects);
                setLoading(false);
                resolve();
            }, 500);
        });
    };

    const deleteProject = (id: string): Promise<void> => {
        return new Promise(resolve => {
            setLoading(true);
            setTimeout(() => {
                const newProjects = projects.filter(p => p.id !== id);
                setProjects(newProjects);
                saveProjectsToStorage(newProjects);
                setLoading(false);
                resolve();
            }, 500);
        });
    };
    
    const value = { projects, getProject, addProject, updateProject, deleteProject, loading };

    return (
        <ProjectAdminContext.Provider value={value}>
            {children}
        </ProjectAdminContext.Provider>
    );
};