import CalendarIcon from "@component/app/assets/icons/Profile";
import CustomButton from "../CustomButton";
import ProfileIcon from "@component/app/assets/icons/Calendar";
import { ButtonVariants } from "../CustomButton/types";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-24 shadow-custom">
      <div className="w-28">
        <CustomButton title={"Reservar"} variant={ButtonVariants.secondary} />
      </div>
      <div className="flex gap-4">
        <button>
          <div className="flex gap-1 items-center">
            <p className="font-medium">Mis Reservas</p>
            <CalendarIcon />
          </div>
        </button>

        <button>
          <div className="flex gap-1 items-center">
            <p className="font-medium">Mi Cuenta</p>
            <ProfileIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
