"use client";

import CustomButton from "../../components/CustomButton";
import TextInput from "../../components/TextInput";
import { InputType } from "@component/app/components/TextInput/types";
import { ButtonVariants } from "@component/app/components/CustomButton/types";
import useLogin from "./useLogin";

const Login = () => {
  const { handleSubmit, onLogin, register, router, errors, isDirty, isValid } =
    useLogin();

  return (
    <div className="flex flex-col w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 px-8 pt-10 pb-8 items-center rounded-lg shadow-[0_0_24px__rgba(0,0,0,0.12)]">
      <p className="font-semibold text-2xl mb-5">Iniciar Sesion</p>
      <div className="flex flex-col w-full gap-y-3">
        <TextInput
          label="Usuario"
          type={InputType.email}
          id="email"
          errors={errors.email}
          registerOptions={{ ...register("email") }}
        />
        <TextInput
          label="Constraseña"
          type={InputType.password}
          id="password"
          errors={errors.password}
          registerOptions={{ ...register("password") }}
        />
      </div>
      <div className="w-full mb-5 mt-3">
        <CustomButton
          title={"Olvidaste tu contraseña?"}
          variant={ButtonVariants.tertiary}
        />
      </div>
      <div className="w-full pb-3 border-b border-gray-3">
        <CustomButton
          title={"Ingresar"}
          variant={ButtonVariants.primary}
          onClick={handleSubmit(onLogin)}
          disabled={!isDirty || !isValid}
        />
      </div>
      <div className="w-full pt-3">
        <CustomButton
          title={"No tenés cuenta? Registrate"}
          variant={ButtonVariants.secondary}
          onClick={() => router.push("pages/signup")}
        />
      </div>
    </div>
  );
};

export default Login;
