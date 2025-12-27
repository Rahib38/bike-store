// import { z } from 'zod';

// export const BikeSchema = z.object({
//   body: z.object({
//     name: z.string().min(1, 'Name is required'),
//     brand: z.string().min(1, 'Brand is required'),
//     image: z.string().optional(),
//     price: z
//       .number()
//       .positive('Price must be a positive number')
//       .min(1, 'Price must be at least 1'),
//     category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
//     description: z
//       .string()
//       .min(10, 'Description must be at least 10 characters long'),
//     quantity: z
//       .number()
//       .int('Quantity must be an integer')
//       .nonnegative('Quantity cannot be negative'),
//   }),
// });
import { z } from 'zod';

export const BikeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    brand: z.string().min(1, 'Brand is required'),
    image: z.string().optional(),
    price: z
      .union([z.number(), z.string()]) // number or string accepted
      .transform((val) => Number(val)) // convert string to number
      .refine((val) => val > 0, 'Price must be a positive number')
      .refine((val) => val >= 1, 'Price must be at least 1'),
    category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
    description: z
      .string()
      .min(1, 'Description must be at least 1 characters long'),
    quantity: z
      .union([z.number(), z.string()])
      .transform((val) => Number(val))
      .refine((val) => Number.isInteger(val), 'Quantity must be an integer')
      .refine((val) => val >= 0, 'Quantity cannot be negative'),
  }),
});
