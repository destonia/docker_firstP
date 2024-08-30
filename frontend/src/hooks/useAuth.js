// hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
// Replace this with your actual authentication check logic
const token = localStorage.getItem('authToken');
if (token) {
	setIsAuthenticated(true);
}
}, []);

return isAuthenticated;
};

export default useAuth;
