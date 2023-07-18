"use client";

import Calendar from "react-calendar";
import CheckboxStep from "../../components/CheboxStep";
import CustomButton, {
  ButtonVariants,
  Size,
} from "../../components/CustomButton";
import { CALENDAR_TYPES } from "react-calendar/dist/cjs/shared/const";
import TextInput from "../../components/TextInput";
import useReservations from "./useReservations";
import SelectInput from "@component/app/components/SelectInput";

export default function Reservations() {
  const {
    steps,
    handleDateSelect,
    horarios,
    sucursales,
    tileClassName,
    selectedDate,
  } = useReservations();

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
            <SelectInput
              data={sucursales}
              defaultValue={"Seleccioná una sucursal"}
              keyValue={"sucursal"}
            />
          </div>
          <div className={`${selectedDate ? "visible" : "hidden"}`}>
            <div className="mt-6">
              <p className="text-sm mb-0.5">Horario</p>
              <SelectInput
                data={horarios}
                defaultValue={"Seleccioná un horario"}
                keyValue={"horario"}
              />
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
