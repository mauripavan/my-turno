import { z } from 'zod';

export const LoginFormData = z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Must be a valid email' })
      .max(256, { message: 'Email is too long' })
      .refine((value) => value.trim().length === value.length, {
        message: 'Email should not contain leading or trailing spaces.',
      }),
    password: z
      .string()
      .min(8)
      .max(64, { message: 'Password is too long' })
      .regex(/^(?=.*[0-9])(?=.*[!@$%&*])(?=.*[A-Z])(?!.*\s)[!@$%&*A-Za-z0-9]*$/, {
        message:
          'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character (!@$%&*), and should not contain spaces or other special characters.',
      })
      .refine((value) => value.trim().length === value.length, {
        message: 'Password should not contain leading or trailing spaces.',
      }),
  });