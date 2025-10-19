import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { I18nProvider } from './i18n/I18nContext';
import Loader from './components/Loader';
import AdminRoutes from './admin/AdminRoutes';
import { ProjectProvider } from './context/ProjectContext';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const AppContent: React.FC = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="bg-kubik-dark min-h-screen text-white">
            {!isAdminRoute && <Header />}
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/project/:projectId" element={<ProjectDetailPage />} />
                    <Route path="/admin/*" element={<AdminRoutes />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            {!isAdminRoute && <Footer />}
        </div>
    );
};


const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <ProjectProvider>
            <I18nProvider>
                <Router>
                    <ScrollToTop />
                    <AppContent />
                </Router>
            </I18nProvider>
        </ProjectProvider>
    );
};

export default App;