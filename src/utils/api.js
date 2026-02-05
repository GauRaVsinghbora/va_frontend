import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User API
export const createUser = async (userData) => {
  const response = await api.post('/users/create', userData);
  return response.data;
};

// Payment API
export const createPaymentOrder = async (userId, amount) => {
  const response = await api.post('/payments/create-order', {
    userId,
    amount,
  });
  return response.data;
};

export const verifyPayment = async (userId, paymentData) => {
  const response = await api.post('/payments/verify', {
    userId,
    ...paymentData,
  });
  return response.data;
};

export default api;

export const getUserByEmail = async (email) => {
  return axios.get(`/api/users/me?email=${email}`);
};

export const updateUser = async (userId, data) => {
  return axios.put(`/api/users/update/${userId}`, data);
};

