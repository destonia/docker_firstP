import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import { useAuth } from './contexts/AuthContext';
import NotFound from './pages/NotFound/NotFound';

function App() {
	const { isAuthenticated } = useAuth();
	return (
		<Router>
			<Routes>
				{/* Route for the login page */}
					<Route path="/login" element={<Login />} />
					<Route path="/admin/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

					<Route path="/admin/*" element={<NotFound />}/>
					{/* <Route path="/admin/dashboard" element={<ProtectedRoute element={Dashboard} isAuthenticated={isAuthenticated} />} /> */}
				{/* Route for the rest of the app */}
				<Route path=""	element={<Home />}/>
				<Route path="*"	element={<NotFound />}/>
			</Routes>
		</Router>
	);
}

export default App;
