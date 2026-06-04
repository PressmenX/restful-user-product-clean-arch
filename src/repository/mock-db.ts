import Category from "../entities/Category";
import Product from "../entities/Product";
import User from "../entities/User";

export const users: User[] = [
  {
    id: "u-7821-abc-99",
    name: "Daffa",
    email: "daffa@example.com",
    password: "hashed_password_123",
  },
  {
    id: "u-9912-xyz-44",
    name: "Budi",
    email: "budi@example.com",
    password: "hashed_password_456",
  },
];

export const categories: Category[] = [
  {
    id: "cat-101",
    name: "Food & Beverage",
  },
  {
    id: "cat-102",
    name: "Electronics",
  },
];

export const products: Product[] = [
  {
    id: "p-v001-prod",
    name: "Kopi Gula Aren",
    price: 25000,
    categoryId: "cat-101",
    stock: 50,
  },
  {
    id: "p-v002-prod",
    name: "Keyboard Mekanik",
    price: 750000,
    categoryId: "cat-103",
    stock: 12,
  },
];
