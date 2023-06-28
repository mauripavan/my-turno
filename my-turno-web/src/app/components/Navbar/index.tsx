import CalendarIcon from "@component/app/assets/icons/Profile";
import CustomButton, { ButtonVariants } from "../CustomButton";
import ProfileIcon from "@component/app/assets/icons/Calendar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-24 shadow-[0_0_12px_rgba(0,0,0,0.08)]">
      <div>
        <CustomButton title={"Reservar"} variant={ButtonVariants.primary} />
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