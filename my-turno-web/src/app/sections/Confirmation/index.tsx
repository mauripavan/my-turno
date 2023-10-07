"use client";

import CheckIcon2 from "@component/app/assets/icons/Check2";
import CustomButton from "@component/app/components/CustomButton";
import {
  ButtonVariants,
  Size,
} from "@component/app/components/CustomButton/types";

const Confirmation = () => {
  return (
    <div className="w-full px-24 pt-8 bg-white">
      <div className="flex flex-col items-center gap-y-6 pb-14 border-b-2 border-b-gray-1">
        <CheckIcon2 className="w-12 h-12 text-red-500" fill="#CC6AFF" />
        <p className="font-semibold text-2xl text-principal">
          ¡Gracias por tu reserva!
        </p>
        <p className="text-sm text-gray-8">
          En hasta 5 minutos, recibirás un correo electrónico en
          ivan@e-cruce.com con todos los detalles de tu reservación. Recordá
          revisar tu buzón de correo no deseado o promociones.
        </p>
        <CustomButton
          title={"Quéres imprimir tu comprobante?"}
          size={Size.large}
        />
      </div>

      <div className="mt-8">
        <div className="flex">
          <div className="flex flex-col flex-1">
            <div className="flex gap-x-2">
              <p className="font-semibold text-2xl">Reserva</p>
              <p className="font-semibold text-2xl text-principal">
                #1043812955480-01
              </p>
            </div>
            <p className="font-semibold text-sm text-gray-8 mt-3">
              Hecho el 10/10/2022 a las 11:35 hs para el 12/10/2022 a las 13:00
              hs
            </p>
          </div>
          <div>
            <div className="mb-4">
              <CustomButton
                title={"Editar Reserva"}
                variant={ButtonVariants.secondary}
                size={Size.large}
              />
            </div>
            <div>
              <CustomButton
                title={"Cancelar Reserva"}
                variant={ButtonVariants.fourth}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-8">
          <div>
            <p className="font-semibold">Ivan Cruce</p>
            <p className="text-gray-8 mt-3 mb-1">
              <span className="font-medium">Mail:</span> ivan@e-cruce.com
            </p>
            <p className="text-gray-8">
              <span className="font-medium">Telefono:</span> 1123445566
            </p>
          </div>
          <div>
            <div>
              <p className="font-semibold">Reserva</p>
              <p className="text-gray-8 mt-3 mb-1">
                <span className="font-medium">Sucursal:</span> Villa Crespo
              </p>
              <p className="text-gray-8">
                <span className="font-medium">Horario:</span> 13:00 hs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
