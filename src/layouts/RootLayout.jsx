import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
// import { useAuthContext } from "../context/authContext";

const RootLayout = () => {
  return (
    <div className="w-full h-full">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
