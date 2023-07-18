"use client";

import { useRouter } from "next/navigation";
import CustomButton, { ButtonVariants } from "../../components/CustomButton";
import TextInput, { InputType } from "../../components/TextInput";
import ArrowIcon from "../../assets/icons/Arrow";

export default function Signup() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 px-8 pt-10 pb-8 rounded-lg shadow-[0_0_24px__rgba(0,0,0,0.12)]">
      <div className="mb-2">
        <button className="text-principal flex items-center gap-1.5" onClick={() => router.back()}>
          <ArrowIcon className="w-3.5 h-3.5" />
          <p>Atrás</p>
        </button>
      </div>
      <p className="font-semibold text-2xl mb-5 text-center">Crear Cuenta</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <TextInput label="Nombre y Apellido" type={InputType.text} />
        </div>
        <div className="col-span-1">
          <TextInput label="DNI" type={InputType.text} />
        </div>
        <div className="col-span-2">
          <TextInput label="Mail" type={InputType.email} />
        </div>
        <div className="col-span-1">
          <TextInput label="Contraseña" type={InputType.password} />
        </div>
        <div className="col-span-1">
          <TextInput label="Repetir Contraseña" type={InputType.password} />
        </div>
      </div>

      <div className="bg-gray-1 py-4 px-5 mt-4 rounded-lg">
        <div className="flex pb-1 border-b border-gray-3 text-gray-7 font-medium text-xs">
          <p>La contraseña debe contener:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 text-gray-7 text-xs gap-y-2">
          <p className="col-span-1">ABC Una letra mayúscula</p>
          <p className="col-span-1">abc una letra minúscula</p>
          <p className="col-span-1">123 Un número</p>
          <p className="col-span-1">*** Mínimo 8 caracteres</p>
        </div>
      </div>

      <div className="w-full pb-3 border-b border-gray-3 mt-5">
        <CustomButton title={"Registrarme"} variant={ButtonVariants.primary} />
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
