import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { checkAuth } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Styles from './Login.css'
import LoadingPage from '../LoadingPage/LoadingPage';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
	const { setIsAuthenticated, isAuthenticated } = useAuth();

	useEffect(() => {
		const verifyAuth = async () => {
			try {
				const response = await checkAuth();
				if (response.status === 200 && response.data.authenticated) {
					setIsAuthenticated(true);
					navigate('/admin/dashboard');
				} else {
					setIsAuthenticated(false);
				}
			} catch (error) {
				setIsAuthenticated(false);
			} finally {
				setIsLoading(false);
			}
		};

		verifyAuth();
    }, [setIsAuthenticated, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
		setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            });

            if (response.status === 200) {
                localStorage.setItem('authToken', response.data.token);
                setIsAuthenticated(true);
                navigate('/admin/dashboard');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            alert('Error: Invalid credentials');
        }
    };

    if (isLoading) {
        return <LoadingPage />; // Display a loading message while checking authentication
    }

    if (isAuthenticated) {
        return null; // Prevent showing the login form if the user is already authenticated
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
