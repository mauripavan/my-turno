"use client";

import Calendar from "react-calendar";
import CheckboxStep from "../../components/CheboxStep";
import CustomButton from "../../components/CustomButton";
import { CALENDAR_TYPES } from "react-calendar/dist/cjs/shared/const";
import TextInput from "../../components/TextInput";
import useReservations from "./useReservations";
import SelectInput from "@component/app/components/SelectInput";
import {
  ButtonVariants,
  Size,
} from "@component/app/components/CustomButton/types";

export default function Reservations() {
  const {
    steps,
    handleDateSelect,
    horarios,
    sucursales,
    tileClassName,
    selectedDate,
    handleBranchSelect,
    errors,
    handleSubmit,
    isDirty,
    isValid,
    onReservationConfirm,
    register,
  } = useReservations();

  return (
    <div className="flex flex-col w-full pt-12 pb-10 px-8 lg:px-24">
      <p className="font-semibold text-xl mb-6">Hace una reserva</p>
      <div className="grid grid-cols-7 gap-10">
        <div className="flex flex-col col-span-7 lg:col-span-4 bg-white px-10 pt-8 pb-11 rounded-lg">
          <p className="font-semibold text-lg mb-1">Reserva</p>
          <p className="font-normal text-sm mb-1">Selecciona tu sucursal</p>

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
            <p className="text-sm mb-0.5">Sucursal</p>
            <SelectInput
              data={sucursales}
              defaultValue={"Seleccioná una sucursal"}
              keyValue={"sucursal"}
              id={"branch"}
              registerOptions={{
                ...register("branch", {
                  onChange(event) {
                    handleBranchSelect(event);
                  },
                }),
              }}
              errors={errors.branch}
            />
          </div>
          <div
            className={`${
              selectedDate && steps[1].completed ? "visible" : "hidden"
            }`}
          >
            <div className="mt-6">
              <p className="text-sm mb-0.5">Horario</p>
              <SelectInput
                data={horarios}
                defaultValue={"Seleccioná un horario"}
                keyValue={"horario"}
                id={"schedule"}
                registerOptions={{
                  ...register("schedule", {
                    onChange(event) {
                      console.log(event.target.value);
                    },
                  }),
                }}
                errors={errors.schedule}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="mt-6 col-span-1">
                <TextInput
                  label="Nombre y Apellido"
                  id={"name"}
                  registerOptions={{ ...register("name") }}
                  errors={errors.name}
                />
              </div>

              <div className="mt-6 col-span-1">
                <TextInput
                  label="Telefono"
                  id={"phone"}
                  registerOptions={{ ...register("phone") }}
                  errors={errors.phone}
                />
              </div>

              <div className="mt-6 col-span-2">
                <TextInput
                  label="Mail"
                  id={"email"}
                  registerOptions={{ ...register("email") }}
                  errors={errors.email}
                />
              </div>
            </div>
          </div>

          <div className=" mt-8">
            <CustomButton
              title={"Confrimar Reserva"}
              disabled={!isDirty || !isValid}
              size={Size.large}
              variant={ButtonVariants.primary}
              onClick={handleSubmit(onReservationConfirm)}
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
