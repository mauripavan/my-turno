import Navbar from "./components/Navbar";
import Login from "./sections/Login";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <Login />
      </div>
    </div>
  );
}
