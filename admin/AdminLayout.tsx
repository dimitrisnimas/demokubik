import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const AdminLayout: React.FC = () => {
    const { logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/admin/login');
    };

    const navLinks = [
        { path: '/admin/dashboard', label: 'Dashboard' },
    ];

    return (
        <div className="min-h-screen bg-kubik-dark text-white flex">
            <aside className="w-64 bg-kubik-gray p-6 flex flex-col flex-shrink-0">
                <h1 className="text-2xl font-bold text-white mb-10">
                    KUBIK<span className="text-kubik-purple">.</span> Admin
                </h1>
                <nav className="flex-grow">
                    <ul>
                        {navLinks.map(link => (
                             <li key={link.path}>
                                <Link 
                                    to={link.path}
                                    className={`block py-2 px-4 rounded-md transition-colors ${location.pathname.startsWith(link.path) ? 'bg-kubik-purple' : 'hover:bg-kubik-dark'}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <button onClick={handleLogout} className="w-full text-left py-2 px-4 rounded-md hover:bg-red-500/20 transition-colors">
                        Log Out
                    </button>
                </div>
            </aside>
            <main className="flex-1 p-10 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
