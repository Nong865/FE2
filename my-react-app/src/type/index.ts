export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Brand {
  id: number;
  name: string;
}

export interface Order {
  id: number;
  customerName: string;
  total: number;
  status: string;
}
