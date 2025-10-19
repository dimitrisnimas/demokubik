import React, { createContext, useContext, ReactNode } from 'react';
import { Project } from '../types';
import { projects as projectsData } from '../data/projectsData';

interface ProjectContextType {
    projects: Project[];
    getProjectById: (id: string) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectProvider");
    }
    return context;
};

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const projects = projectsData;

    const getProjectById = (id: string): Project | undefined => {
        return projects.find(p => p.id === id);
    };

    const value = { projects, getProjectById };

    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}