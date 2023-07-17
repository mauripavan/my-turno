"use client";

import Calendar from "react-calendar";
import CheckboxStep from "../components/CheboxStep";
import CustomButton, { ButtonVariants, Size } from "../components/CustomButton";
import { ChangeEvent, useEffect, useState } from "react";
import { CALENDAR_TYPES } from "react-calendar/dist/cjs/shared/const";
import { isSunday, differenceInDays } from "date-fns";
import { ICheckboxStepProps } from "../components/CheboxStep/types";
import TextInput from "../components/TextInput";

const reservationSteps: ICheckboxStepProps[] = [
  {
    name: "Elegí tu sucursal",
    number: 1,
    completed: false,
    active: true,
  },
  {
    name: "Selecciona el día",
    number: 2,
    completed: false,
    active: false,
  },
  {
    name: "Completa el formulario",
    number: 3,
    completed: false,
    active: false,
  },
];

const sucursales = [
  "Seleccioná una sucursal",
  "Villa Crespo",
  "Palermo",
  "Colegiales",
];

const horarios = [
  "Seleccioná un horario",
  "De 9:00 a 13:00 hs",
  "De 15:00 a 19:00 hs",
];

export default function Reservations() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [steps, setSteps] = useState(reservationSteps);
  const [branchSelected, setBranchSelected] = useState("");

  useEffect(() => {
    console.log("branchSelected", branchSelected);
  }, [branchSelected]);

  const disableDates = (date: Date, view?: string) => {
    if (view === "month") {
      const diff = differenceInDays(date, new Date());
      if (diff < 0) return true;
    }
    if (view === "year") {
      if (date.getMonth() < today.getMonth()) return true;
    }
    if (isSunday(date) && view === "month") return true;
    return false;
  };

  const tileClassName = ({ date, view }: any) => {
    let classes = "text-center py-3 font-medium text-base rounded";
    if (selectedDate && selectedDate.toDateString() === date.toDateString()) {
      classes += " bg-principal text-white";
    }
    if (isSunday(date) && view === "month") {
      classes += " text-gray-4 cursor-not-allowed";
    } else if (disableDates(date, view)) {
      classes += " text-gray-4 cursor-not-allowed";
    } else {
      classes += " cursor-pointer";
    }
    return classes;
  };

  const handleDateSelect = (date: any) => {
    if (disableDates(date)) return;
    setSelectedDate(date);
    const newStepValue = [...steps];
    newStepValue[1] = {
      completed: true,
      active: false,
      name: "Selecciona el día",
      number: 2,
    };
    newStepValue[2] = {
      completed: false,
      active: true,
      name: "Completá el formulario",
      number: 3,
    };
    setSteps(newStepValue);
  };

  const handleBranchSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setBranchSelected(e.target.value);
    const newStepValue = [...steps];
    newStepValue[0] = {
      completed: true,
      active: false,
      name: "Elegí tu sucursal",
      number: 1,
    };
    newStepValue[1] = {
      completed: false,
      active: true,
      name: "Selecciona el día",
      number: 2,
    };
    setSteps(newStepValue);
  };

  return (
    <div className="flex flex-col w-full pt-12 pb-10 px-8 lg:px-24">
      <p className="font-semibold text-xl mb-6">Hace una reserva</p>
      <div className="grid grid-cols-7 gap-10">
        <div className="flex flex-col col-span-7 lg:col-span-4 bg-white px-10 pt-8 pb-11 rounded-lg">
          <p className="font-semibold text-lg mb-1">Reserva</p>
          <p className="font-normal text-sm mb-1">Selecciona tu sercural</p>

          <div className="grid grid-cols-3 mt-6">
            {steps.map((item, key) => {
              return (
                <CheckboxStep
                  key={key}
                  name={item.name}
                  number={item.number}
                  completed={item.completed}
                  active={item.active}
                />
              );
            })}
          </div>

          <div className="mt-6">
            <select
              defaultValue={"Seleccioná una sucursal"}
              className="w-full py-3 px-2 rounded-lg border border-color-gray-3"
              onChange={(e) => handleBranchSelect(e)}
            >
              {sucursales.map((item, key) => {
                return (
                  <option disabled={key === 0} key={`sucursale-${key}`}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={`${selectedDate ? "visible" : "hidden"}`}>
            <div className="mt-6">
              <p className="text-sm mb-0.5">Horario</p>
              <select
                defaultValue={"Seleccioná un horario"}
                className="w-full py-3 px-2 rounded-lg border border-color-gray-3"
              >
                {horarios.map((item, key) => {
                  return (
                    <option disabled={key === 0} key={`sucursale-${key}`}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="mt-6 col-span-1">
                <TextInput label="Nombre y Apellido" />
              </div>

              <div className="mt-6 col-span-1">
                <TextInput label="Telefono" />
              </div>

              <div className="mt-6 col-span-2">
                <TextInput label="Mail" />
              </div>
            </div>
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
        <div
          className={`h-fit col-span-7 lg:col-span-3 bg-white px-10 pt-8 pb-11 rounded-lg ${
            !steps[1].active &&
            !steps[1].completed &&
            "opacity-50 cursor-not-allowed z-20"
          } `}
        >
          <Calendar
            value={selectedDate}
            calendarType={CALENDAR_TYPES.HEBREW}
            showNeighboringMonth={false}
            formatShortWeekday={(_locale, date) =>
              ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"][date.getDay()]
            }
            minDate={new Date()}
            className={"text-center font-sans font-noraml text-gray-7 text-lg"}
            tileClassName={tileClassName}
            nextLabel={null}
            next2Label={null}
            prevLabel={null}
            prev2Label={null}
            minDetail="year"
            locale="es"
            onClickDay={
              ((steps[1].active || steps[1].completed) && handleDateSelect) ||
              undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
