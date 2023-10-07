import { z } from 'zod';

export const LoginFormData = z.object({
  email: z
    .string({ required_error: 'El email es requerido' })
    .email({ message: 'Debe ser un email valido' })
    .max(256, { message: 'El email es muy largo' })
    .refine((value) => value.trim().length === value.length, {
      message: 'El email no debe contener espacios iniciales o finales',
    }),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});

export const SingupFormData = z
  .object({
    name: z
      .string()
      .max(64, { message: 'El nombre es muy largo' })
      .min(1, { message: 'El nombre es requerido' }),
    dni: z
      .string()
      .max(14, { message: 'El DNI es muy largo' })
      .min(6, { message: 'El DNI es requerido' }),
    email: z
      .string({ required_error: 'El email es requerido' })
      .email({ message: 'Debe ser un email valido' })
      .max(256, { message: 'El email es muy largo' })
      .refine((value) => value.trim().length === value.length, {
        message: 'El email no debe contener espacios iniciales o finales',
      }),
    password: z.string().min(8).regex(/[A-Z]/).regex(/[a-z]/).regex(/\d/),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Las contraseñas no coinciden',
    path: ['confirm_password'],
  });

export const ReservationFormData = z.object({
  email: z
    .string({ required_error: 'El email es requerido' })
    .email({ message: 'Debe ser un email valido' })
    .max(256, { message: 'El email es muy largo' })
    .refine((value) => value.trim().length === value.length, {
      message: 'El email no debe contener espacios iniciales o finales',
    }),
  phone: z
    .string()
    .nonempty({ message: 'Por favor seleccioná tu número telefónico' }),
  name: z
    .string()
    .max(64, { message: 'El nombre es muy largo' })
    .min(1, { message: 'El nombre es requerido' }),
  schedule: z.string().nonempty({ message: 'Por favor seleccioná un horario' }),
  branch: z.string().nonempty({ message: 'Por favor seleccioná una sucursal' }),
});
