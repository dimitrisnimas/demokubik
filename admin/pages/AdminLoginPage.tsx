import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
    const [email, setEmail] = useState('admin@kubik.agency');
    const [password, setPassword] = useState('password');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/admin/dashboard";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            setError('Failed to log in. Check credentials.');
        }
        setLoading(false);
    };

    return (
        <div className="bg-kubik-dark min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-kubik-gray p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    KUBIK<span className="text-kubik-purple">.</span> Admin
                </h1>
                <p className="text-center text-gray-400 mb-4 text-sm">Demo Login: <br/> admin@kubik.agency / password</p>
                <form onSubmit={handleSubmit}>
                    {error && <p className="bg-red-500/20 text-red-400 p-3 rounded-md mb-4">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-kubik-dark border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-kubik-purple"
                        />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-kubik-purple text-white font-bold py-3 px-8 rounded-full hover:bg-kubik-purple/80 transition-colors duration-300 disabled:opacity-50">
                        {loading ? 'Logging In...' : 'Log In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
