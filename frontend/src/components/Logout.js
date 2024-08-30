import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const handleLogout = async () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
};

export default Logout;
