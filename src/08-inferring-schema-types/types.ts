import { z } from 'zod';
import {
  pizzaSchema,
  extraIngredientSchema,
  extraIngredientsSchema,
} from './schemas';

export type Pizza = z.infer<typeof pizzaSchema>;

// export type Pizza = {
//   name: string;
//   ingredients: string[];
//   price: number;
//   extras: string[];
// };

// export type ExtraIngredients = Record<string, ExtraIngredient>;

// export type ExtraIngredient = {
//   name: string;
//   price: number;
// };

export type ExtraIngredients = z.infer<typeof extraIngredientsSchema>;

export type ExtraIngredient = z.infer<typeof extraIngredientSchema>;

export type PizzaOnOrder = {
  name: string;
  price: number;
  extraIngredients: ExtraIngredient[];
};
