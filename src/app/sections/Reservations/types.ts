import { ReservationFormData } from '@component/schema';
import { z } from 'zod';

export type ReservationForm = z.infer<typeof ReservationFormData>;
