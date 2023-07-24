"use client";

import CustomButton from "../../components/CustomButton";
import TextInput from "../../components/TextInput";
import ArrowIcon from "../../assets/icons/Arrow";
import { InputType } from "@component/app/components/TextInput/types";
import { ButtonVariants } from "@component/app/components/CustomButton/types";
import useSignup from "./useSignup";
import PasswordRequirements from "@component/app/components/PasswordRequirements";

export default function Signup() {
  const {
    errors,
    handlePasswordChange,
    handleSubmit,
    isDirty,
    isValid,
    onSignup,
    passwordRequirements,
    register,
    router,
  } = useSignup();

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

      <PasswordRequirements requirements={passwordRequirements} />

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
