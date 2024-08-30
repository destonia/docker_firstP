// src/pages/Dashboard.js

import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import Logout from '../../components/Logout';


const Dashboard = () => {
return (
	<div className="dashboard-container">
		<h1>Dashboard</h1>
		<p>Welcome to your dashboard! Here you can manage your account and view important information.</p>
		<nav>
			<ul className="dashboard-nav-list">
				<li>
					<a href="/profile" className="dashboard-link">Profile</a>
				</li>
				<li>
					<a href="/settings" className="dashboard-link">Settings</a>
				</li>
				<li>
					<Logout />
				</li>
			</ul>
		</nav>
	</div>
);
};

export default Dashboard;
