"use client";

import { useRouter } from "next/navigation";
import CustomButton, { ButtonVariants } from "../../components/CustomButton";
import TextInput, { InputType } from "../../components/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormData } from "@component/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const router = useRouter();
  type EditEmailForm = z.infer<typeof LoginFormData>;
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<EditEmailForm>({
    mode: "onTouched",
    resolver: zodResolver(LoginFormData),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin: SubmitHandler<EditEmailForm> = (data) => {
    router.push("pages/reservations");
  };

  return (
    <div className="flex flex-col w-1/3 px-8 pt-10 pb-8 items-center rounded-lg shadow-[0_0_24px__rgba(0,0,0,0.12)]">
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
