import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
    
    // AdminLayout contains the <Outlet/> for the nested protected routes to render into.
    return <AdminLayout />;
};

const AdminRoutesContent: React.FC = () => {
    return (
         <Routes>
            {/* Public route available under /admin/login */}
            <Route path="login" element={<AdminLoginPage />} />

            {/* A wrapper route that protects all its children */}
            <Route element={<ProtectedRoute />}>
                {/* Protected routes */}
                <Route path="dashboard" element={<AdminDashboardPage />} />
                <Route path="projects/new" element={<AdminProjectFormPage />} />
                <Route path="projects/edit/:projectId" element={<AdminProjectFormPage />} />

                {/* Index route to redirect from /admin -> /admin/dashboard */}
                <Route index element={<Navigate to="dashboard" replace />} />
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
