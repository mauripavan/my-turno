import Confirmation from '@component/app/sections/Confirmation';
import Navbar from '../../components/Navbar';

export default function ReservationsSection() {
  return (
    <div>
      <Navbar />
      <div className='flex bg-gray-100 min-h-screen'>
        <Confirmation />
      </div>
    </div>
  );
}
