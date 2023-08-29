import { z } from 'zod';

// req validation
const createCustomerZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    customer: z.object({
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
      }),
      contactNo: z.string({
        required_error: 'Contact number is required',
      }),
      address: z.string({
        required_error: 'Address is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});

const createSellerZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    seller: z.object({
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
      }),
      contactNo: z.string({
        required_error: 'Contact number is required',
      }),
      storeName: z.string({
        required_error: 'Store Name is required',
      }),
      storeLogo: z.string({
        required_error: 'Store Logo is required',
      }),
      storeBanner: z.string({
        required_error: 'Store Banner is required',
      }),
      storeDescription: z.string({
        required_error: 'Store Description is required',
      }),
      storeAddress: z.string({
        required_error: 'Store Address is required',
      }),
      tradeLicenseNo: z.string({
        required_error: 'Trade license no is required',
      }),
      paymentMethod: z.string({
        required_error: 'Payment method is required',
      }),
      paymentDetails: z.string({
        required_error: 'Payment details is required',
      }),
      status: z.boolean().optional(),
      isVerified: z.boolean().optional(),
    }),
  }),
});

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    admin: z.object({
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
      }),
      contactNo: z.string({
        required_error: 'Contact number is required',
      }),
      address: z.string({
        required_error: 'Address is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});

export const UserValidation = {
  createCustomerZodSchema,
  createSellerZodSchema,
  createAdminZodSchema,
};
