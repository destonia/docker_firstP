// src/utils/authUtils.js
import axios from 'axios';

export const checkAuth = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No token found');

    try {
        const response = await axios.get('http://localhost:8000/api/check-auth', {
            headers: { 'Authorization': `Bearer ${token}` },
            withCredentials: true
        });
        return response;
    } catch (error) {
        throw new Error('Authentication check failed');
    }
};
