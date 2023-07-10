"use client";

import Calendar from "react-calendar";
import CheckboxStep from "../components/CheboxStep";
import CustomButton, { ButtonVariants, Size } from "../components/CustomButton";
import { useState } from "react";
import { CALENDAR_TYPES } from "react-calendar/dist/cjs/shared/const";

const reservationSteps = [
  {
    name: "Elegí tu sucursal",
    number: 1,
    completed: true,
    active: false,
  },
  {
    name: "Selecciona el día",
    number: 2,
    completed: false,
    active: true,
  },
  {
    name: "Completa el formulario",
    number: 3,
    completed: false,
    active: false,
  },
];

export default function Reservations() {
  const [value, ] = useState(new Date());
  return (
    <div className="flex flex-col w-full pt-12 pb-10 px-24">
      <p className="font-semibold text-xl mb-6">Hace una reserva</p>
      <div className="grid grid-cols-7 gap-x-10">
        <div className="flex flex-col col-span-4 bg-white px-10 pt-8 pb-11 rounded-lg">
          <p className="font-semibold text-lg mb-1">Reserva</p>
          <p className="font-normal text-sm mb-1">Selecciona tu sercural</p>

          <div className="grid grid-cols-3 mt-6">
            {reservationSteps.map((item, key) => {
              return (
                <CheckboxStep
                  stepName={item.name}
                  stepNumber={item.number}
                  completed={item.completed}
                  activeStep={item.active}
                />
              );
            })}
          </div>

          <div className="mt-6">
            <select className="w-full py-3 px-2 rounded-lg border border-color-gray-3">
              <option>Sucursal 1</option>
              <option>Sucursal 2</option>
              <option>Sucursal 3</option>
            </select>
          </div>

          <div className=" mt-8">
            <CustomButton
              title={"Confrimar Reserva"}
              disabled
              size={Size.large}
              variant={ButtonVariants.primary}
            />
          </div>
        </div>

        <div className="col-span-3 bg-white px-10 pt-8 pb-11 rounded-lg">
          <Calendar value={value} calendarType={CALENDAR_TYPES.HEBREW} showNeighboringMonth={false} />
        </div>
      </div>
    </div>
  );
}
