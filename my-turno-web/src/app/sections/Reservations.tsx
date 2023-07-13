"use client";

import Calendar from "react-calendar";
import CheckboxStep from "../components/CheboxStep";
import CustomButton, { ButtonVariants, Size } from "../components/CustomButton";
import { useEffect, useState } from "react";
import { CALENDAR_TYPES } from "react-calendar/dist/cjs/shared/const";
import { isSunday } from "date-fns";

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

const sucursales = ["Villa Crespo", "Palermo", "Colegiales"];

export default function Reservations() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();

  // Función para deshabilitar ciertas fechas
  const disableDates = (date: Date, view?: string) => {
    if (view === "month") {
      if (date < new Date()) return true;
    }
    if (view === "year") {
      if (date.getMonth() < today.getMonth()) return true;
    }
    return false;
  };

  // Función para agregar clases personalizadas a los días
  const tileClassName = ({ date, view }: any) => {
    // Aquí puedes personalizar las clases según tus necesidades
    console.log("DATE===>", date);

    let classes = "text-center py-3 font-medium text-base rounded";

    if (selectedDate && selectedDate.toDateString() === date.toDateString()) {
      classes += " bg-principal text-white";
    }

    if (isSunday(date) && view === "month") {
      classes += " text-gray-4 cursor-not-allowed";
    } else if (disableDates(date, view)) {
      classes += " text-gray-5 bg-gray-2 cursor-not-allowed";
    } else {
      classes += " cursor-pointer";
    }

    return classes;
  };

  const handleDateSelect = (date: any) => {
    if (disableDates(date)) return;
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log("selectedDate", selectedDate);
  }, [selectedDate]);

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
                  key={key}
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
              {sucursales.map((item, key) => {
                return <option key={`sucursale-${key}`}>{item}</option>;
              })}
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
          <Calendar
            value={selectedDate}
            calendarType={CALENDAR_TYPES.HEBREW}
            showNeighboringMonth={false}
            formatShortWeekday={(_locale, date) =>
              ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"][date.getDay()]
            }
            minDate={new Date()}
            className={"text-center font-sans font-normal text-gray-7 text-lg"}
            tileClassName={tileClassName}
            nextLabel={null}
            next2Label={null}
            prevLabel={null}
            prev2Label={null}
            minDetail="year"
            locale="es"
            onClickDay={handleDateSelect}
          />
        </div>
      </div>
    </div>
  );
}
