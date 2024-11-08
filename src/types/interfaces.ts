export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
  }
  
  export interface Apartment {
    id: string;
    name: string;
    location: string;
    pricePerNight: number;
    description: string;
    images: string[];
  }
  
  export interface Reservation {
    id: string;
    userId: string;
    apartmentId: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
  }