"use client";

import { useRouter } from "next/navigation";
import CustomButton, { ButtonVariants } from "../../components/CustomButton";
import TextInput, { InputType } from "../../components/TextInput";
import ArrowIcon from "../../assets/icons/Arrow";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SingupFormData } from "@component/schema";
import { useState } from "react";
import CheckIcon2 from "@component/app/assets/icons/Check2";
import WrongIcon from "@component/app/assets/icons/Wrong";

export default function Signup() {
  const router = useRouter();
  type SingupForm = z.infer<typeof SingupFormData>;

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<SingupForm>({
    mode: "onTouched",
    resolver: zodResolver(SingupFormData),
    defaultValues: {
      email: "",
      name: "",
      dni: "",
      password: "",
      confirm_password: "",
    },
  });

  type PasswordRequirementsType = {
    length: boolean | undefined;
    uppercase: boolean | undefined;
    lowercase: boolean | undefined;
    number: boolean | undefined;
  };

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
    router.push('/')
  };

  return (
    <div className="flex flex-col w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 px-8 pt-10 pb-8 rounded-lg shadow-[0_0_24px__rgba(0,0,0,0.12)]">
      <div className="mb-2">
        <button
          className="text-principal flex items-center gap-1.5"
          onClick={() => router.back()}
        >
          <ArrowIcon className="w-3.5 h-3.5" />
          <p>Atrás</p>
        </button>
      </div>
      <p className="font-semibold text-2xl mb-5 text-center">Crear Cuenta</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <TextInput
            label="Nombre y Apellido"
            type={InputType.text}
            id={"name"}
            errors={errors.name}
            registerOptions={{ ...register("name") }}
          />
        </div>
        <div className="col-span-1">
          <TextInput
            label="DNI"
            type={InputType.text}
            id={"dni"}
            errors={errors.dni}
            registerOptions={{ ...register("dni") }}
          />
        </div>
        <div className="col-span-2">
          <TextInput
            label="Mail"
            type={InputType.email}
            id={"email"}
            errors={errors.email}
            registerOptions={{ ...register("email") }}
          />
        </div>
        <div className="col-span-1">
          <TextInput
            label="Contraseña"
            type={InputType.password}
            id={"password"}
            registerOptions={{
              ...register("password", { onChange: handlePasswordChange }),
            }}
            errors={errors.password}
            hideErrorMessage
          />
        </div>
        <div className="col-span-1">
          <TextInput
            label="Repetir Contraseña"
            type={InputType.password}
            id={"confirm_password"}
            registerOptions={{ ...register("confirm_password") }}
            errors={errors.confirm_password}
          />
        </div>
      </div>

      <div className="bg-gray-1 py-4 px-5 mt-4 rounded-lg">
        <div className="flex pb-1 border-b border-gray-3 text-gray-7 font-medium text-xs">
          <p>La contraseña debe contener:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 text-gray-7 text-xs gap-y-2">
          <div
            className={`flex col-span-1 gap-x-1 ${
              passwordRequirements.uppercase === undefined
                ? "text-gray-7"
                : passwordRequirements.uppercase === true
                ? "text-success"
                : "text-error"
            }`}
          >
            {passwordRequirements.uppercase ===
            undefined ? null : passwordRequirements.uppercase === true ? (
              <CheckIcon2 />
            ) : (
              <WrongIcon />
            )}
            <p>ABC Una letra mayúscula</p>
          </div>
          <div
            className={`flex col-span-1 gap-x-1 ${
              passwordRequirements.lowercase === undefined
                ? "text-gray-7"
                : passwordRequirements.lowercase === true
                ? "text-success"
                : "text-error"
            }`}
          >
            {passwordRequirements.lowercase ===
            undefined ? null : passwordRequirements.lowercase === true ? (
              <CheckIcon2 />
            ) : (
              <WrongIcon />
            )}
            <p>abc Una letra minúscula</p>
          </div>
          <div
            className={`flex col-span-1 gap-x-1 ${
              passwordRequirements.number === undefined
                ? "text-gray-7"
                : passwordRequirements.number === true
                ? "text-success"
                : "text-error"
            }`}
          >
            {passwordRequirements.number ===
            undefined ? null : passwordRequirements.number === true ? (
              <CheckIcon2 />
            ) : (
              <WrongIcon />
            )}
            <p>123 Un número</p>
          </div>
          <div
            className={`flex col-span-1 gap-x-1 ${
              passwordRequirements.length === undefined
                ? "text-gray-7"
                : passwordRequirements.length === true
                ? "text-success"
                : "text-error"
            }`}
          >
            {passwordRequirements.length ===
            undefined ? null : passwordRequirements.length === true ? (
              <CheckIcon2 />
            ) : (
              <WrongIcon />
            )}
            <p>*** Mínimo 8 caracteres</p>
          </div>
        </div>
      </div>

      <div className="w-full pb-3 border-b border-gray-3 mt-5">
        <CustomButton
          title={"Registrarme"}
          variant={ButtonVariants.primary}
          onClick={handleSubmit(onSignup)}
          disabled={!isDirty || !isValid}
        />
      </div>
      <div className="w-full pt-3">
        <CustomButton
          title={"Ya tenes cuenta? Iniciá Sesion"}
          variant={ButtonVariants.secondary}
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}
