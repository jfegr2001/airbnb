// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6705baa1031fd46a8310cf5d.mockapi.io/:endpoint', // Reemplaza con tu URL de MockAPI
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
