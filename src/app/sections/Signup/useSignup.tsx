import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PasswordRequirementsType, SingupForm } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SingupFormData } from '@component/schema';
import { useState } from 'react';

const useSignup = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<SingupForm>({
    mode: 'onTouched',
    resolver: zodResolver(SingupFormData),
    defaultValues: {
      email: '',
      name: '',
      dni: '',
      password: '',
      confirm_password: '',
    },
  });

  const [passwordRequirements, setPasswordRequirements] =
    useState<PasswordRequirementsType>({
      length: undefined,
      uppercase: undefined,
      lowercase: undefined,
      number: undefined,
    });

  const handlePasswordChange = (e: any) => {
    console.log(e.target.value);

    const newPasswordRequirements = {
      length: e.target.value.length >= 8,
      uppercase: /[A-Z]/.test(e.target.value),
      lowercase: /[a-z]/.test(e.target.value),
      number: /\d/.test(e.target.value),
    };

    setPasswordRequirements(newPasswordRequirements);
  };

  const onSignup: SubmitHandler<SingupForm> = (data) => {
    router.push('/');
  };

  return {
    register,
    router,
    handleSubmit,
    errors,
    isValid,
    isDirty,
    passwordRequirements,
    handlePasswordChange,
    onSignup,
  };
};

export default useSignup;
