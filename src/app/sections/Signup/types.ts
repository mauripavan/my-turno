import { SingupFormData } from '@component/schema';
import { z } from 'zod';

export type SingupForm = z.infer<typeof SingupFormData>;

export type PasswordRequirementsType = {
  length: boolean | undefined;
  uppercase: boolean | undefined;
  lowercase: boolean | undefined;
  number: boolean | undefined;
};
