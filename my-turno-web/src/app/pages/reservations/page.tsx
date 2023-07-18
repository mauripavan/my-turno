import Navbar from "../../components/Navbar";
import Reservations from "../../sections/Reservations";
import Signup from "../../sections/Signup";

export default function ReservationsSection() {
  return (
    <div>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        <Reservations />
      </div>
    </div>
  );
}
