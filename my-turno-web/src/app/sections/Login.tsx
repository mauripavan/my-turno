"use client";

import CustomButton, { ButtonVariants } from "../components/CustomButton";
import TextInput, { InputType } from "../components/TextInput";

const Login = () => {
  return (
    <div className="flex flex-col w-1/3 px-8 pt-10 pb-8 items-center rounded-lg shadow-[0_0_24px__rgba(0,0,0,0.12)]">
      <p className="font-semibold text-2xl mb-5">Iniciar Sesion</p>
      <div className="flex flex-col w-full gap-y-3">
        <TextInput label="Usuario" type={InputType.email} />
        <TextInput label="Constraseña" type={InputType.password}/>
      </div>
      <div className="w-full mb-5 mt-3">
        <CustomButton
          title={"Olvidaste tu contraseña?"}
          variant={ButtonVariants.tertiary}
        />
      </div>
      <div className="w-full pb-3 border-b border-gray-3">
        <CustomButton title={"Ingresar"} variant={ButtonVariants.primary} />
      </div>
      <div className="w-full pt-3">
        <CustomButton
          title={"No tenés cuenta? Registrate"}
          variant={ButtonVariants.secondary}
        />
      </div>
    </div>
  );
};

export default Login;
