import Navbar from "../../components/Navbar";
import Reservations from "../../sections/Reservations";

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
