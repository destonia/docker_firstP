import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate(); // Hook for navigation
	const { setIsAuthenticated } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/api/login', {
			email: email,
			password: password,
			});
	
			if (response.status === 200) {
				setIsAuthenticated(true);
				navigate('/dashboard');
				console.log('Login successful:', response.data);
			} else {
				console.error('Login failed:', response.data.message);
				navigate('/login');
			}
		} catch (error) {
			console.error('Error:', error.response ? error.response.data : error.message);
			alert('Login info are not correct!');
		}
	};

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
