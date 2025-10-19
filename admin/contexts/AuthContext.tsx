import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// --- SECURITY UPGRADE ---
// Credentials are now read from environment variables.
// For local development, set these in a `.env.local` file in the project root.
// For production, set these in your hosting provider's dashboard.
const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME || 'admin@kubik.agency';
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'password';
// --------------------

// Mock auth functions, in a real app this would use Firebase
const mockAuth = {
    onAuthStateChanged: (callback: (user: any) => void) => {
        // Simulate checking auth state on load
        const timeoutId = setTimeout(() => {
            const user = localStorage.getItem('adminUser');
            callback(user ? JSON.parse(user) : null);
        }, 500);
        return () => clearTimeout(timeoutId); // Unsubscribe function
    },
    signIn: async (email: string, pass: string) => {
        if (email === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
            const user = { email, uid: 'mock-admin-user' };
            localStorage.setItem('adminUser', JSON.stringify(user));
            return user;
        }
        throw new Error('Invalid credentials');
    },
    signOut: async () => {
         localStorage.removeItem('adminUser');
    }
}

interface AuthContextType {
    currentUser: any | null;
    loading: boolean;
    login: (email: string, pass: string) => Promise<any>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    const login = (email: string, pass: string) => {
        return mockAuth.signIn(email, pass).then(user => {
            setCurrentUser(user);
            return user;
        });
    }

    const logout = () => {
        return mockAuth.signOut().then(() => {
            setCurrentUser(null);
        });
    }

    useEffect(() => {
        const unsubscribe = mockAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    

    const value = {
        currentUser,
        loading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
