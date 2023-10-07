import Navbar from "../../components/Navbar";
import Reservations from "../../sections/Reservations";

export default function ReservationsSection() {
  return (
    <div>
      <Navbar />
      <div className="flex bg-white min-h-screen">
        <Reservations />
      </div>
    </div>
  );
}
