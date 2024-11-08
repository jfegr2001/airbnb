// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Apartments from '../views/Apartments.vue';
import ApartmentDetails from '../views/ApartmentDetails.vue';
import Reservations from '../views/Reservations.vue';
import Login from '../views/Login.vue';
import AddApartment from '../views/AddApartment.vue'; // Nueva importación

const routes = [
  { path: '/', name: 'Apartments', component: Apartments },
  { path: '/apartment/:id', name: 'ApartmentDetails', component: ApartmentDetails },
  { path: '/reservations', name: 'Reservations', component: Reservations },
  { path: '/login', name: 'Login', component: Login },
  { path: '/add-apartment', name: 'AddApartment', component: AddApartment }, // Nueva ruta
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

