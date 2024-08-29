import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import { useAuth } from './contexts/AuthContext';

function App() {
	const { isAuthenticated } = useAuth();
	return (
		<Router>
			<Routes>
				{/* Route for the login page */}
					<Route path="/login" element={<Login />} />

					<Route path="/admin/*" element={<ProtectedRoute element={Home} isAuthenticated={isAuthenticated} />} />
					<Route path="/dashboard" element={<ProtectedRoute element={Dashboard} isAuthenticated={isAuthenticated} />} />


				{/* Route for the rest of the app */}
				<Route path="*"	element={<Home />}/>
			</Routes>
		</Router>
	);
}

export default App;
