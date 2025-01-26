import { z } from 'zod';

export const BikeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    brand: z.string().min(1, 'Brand is required'),
    price: z
      .number()
      .positive('Price must be a positive number')
      .min(1, 'Price must be at least 1'),
    category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long'),
    quantity: z
      .number()
      .int('Quantity must be an integer')
      .nonnegative('Quantity cannot be negative'),
    inStock: z.boolean(),
  }),
});
