import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { checkAuth } from '../utils/authUtils';
import { useAuth } from '../contexts/AuthContext';
import LoadingPage from './LoadingPage/LoadingPage';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { setIsAuthenticated: setAuthState } = useAuth();

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const response = await checkAuth();
                if (response.status === 200 && response.data.authenticated) {
                    setIsAuthenticated(true);
                    setAuthState(true);
                } else {
                    setIsAuthenticated(false);
                    setAuthState(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
                setAuthState(false);
            } finally {
                setIsLoading(false);
            }
        };

        verifyAuth();
    }, [setAuthState]);

    if (isLoading) {
        return <LoadingPage/>;
    }

    return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
