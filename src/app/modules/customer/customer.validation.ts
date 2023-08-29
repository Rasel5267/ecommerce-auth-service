import { z } from 'zod';

const updateCustomerZodSchema = z.object({
  body: z.object({
    email: z.string().email().optional(),
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImage: z.string().optional(),
  }),
});

export const CustomerValidation = {
  updateCustomerZodSchema,
};
