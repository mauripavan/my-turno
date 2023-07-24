"use client";

import { ICheckboxStepProps } from "@component/app/components/CheboxStep/types";
import { differenceInDays, isSunday } from "date-fns";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReservationForm } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReservationFormData } from "@component/schema";
import { useRecoilState } from "recoil";
import { reservationModalState } from "@component/app/store/app-state";
import { useRouter } from "next/navigation";

export default function useReservations() {
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

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [steps, setSteps] = useState(reservationSteps);
  const [branchSelected, setBranchSelected] = useState("");
  const [successModal, setSuccessModal] = useRecoilState(reservationModalState);
  const router = useRouter();

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

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<ReservationForm>({
    mode: "onTouched",
    resolver: zodResolver(ReservationFormData),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      branch: "",
      schedule: "",
    },
  });

  const onReservationConfirm: SubmitHandler<ReservationForm> = (data) => {
    setSuccessModal(true);
  };

  const onContinue = () => {
    router.push("/pages/confirmation");
  };

  return {
    steps,
    sucursales,
    horarios,
    selectedDate,
    tileClassName,
    handleDateSelect,
    handleBranchSelect,
    onReservationConfirm,
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    successModal,
    onContinue
  };
}
