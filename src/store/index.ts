// src/store/index.ts
import { defineStore } from 'pinia';
import api from '../api';
import { User, Apartment, Reservation } from '../types/interfaces';

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null as User | null,
    apartments: [] as Apartment[],
    reservations: [] as Reservation[],
  }),

  actions: {
    async fetchApartments() {
      const { data } = await api.get<Apartment[]>('/apartments');
      this.apartments = data;
    },

    async login(username: string, password: string) {
      const { data } = await api.get<User[]>('/users', { params: { username, password } });
      if (data.length) {
        this.user = data[0];
      } else {
        throw new Error('Invalid credentials');
      }
    },

    async fetchReservations() {
      if (!this.user) return;
      const { data } = await api.get<Reservation[]>(`/reservations?userId=${this.user.id}`);
      this.reservations = data;
    },
  },
});
