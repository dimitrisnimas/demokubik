import React, { ReactNode } from 'react';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProjectAdminProvider } from './contexts/ProjectAdminContext';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminProjectFormPage from './pages/AdminProjectFormPage';
import AdminLayout from './AdminLayout';

const ProtectedRoute: React.FC = () => {
    const { currentUser, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="bg-kubik-dark h-screen flex justify-center items-center text-white">Loading...</div>;
    }
    
    if (!currentUser) {
       return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }
    
    return <AdminLayout />;
};

const AdminRoutesContent: React.FC = () => {
    return (
         <Routes>
            <Route path="login" element={<AdminLoginPage />} />
            <Route path="/" element={<ProtectedRoute />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboardPage />} />
                <Route path="projects/new" element={<AdminProjectFormPage />} />
                <Route path="projects/edit/:projectId" element={<AdminProjectFormPage />} />
            </Route>
        </Routes>
    )
}


const AdminRoutes: React.FC = () => {
    return (
       <AuthProvider>
            <ProjectAdminProvider>
               <AdminRoutesContent />
            </ProjectAdminProvider>
       </AuthProvider>
    );
};

export default AdminRoutes;