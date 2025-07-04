import {Rating} from './Rating'

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: Rating,
  category: string;
  image: string;
}