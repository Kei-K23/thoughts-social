import { NavLink } from "react-router-dom";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { useAuthContext } from "../context/authContext";
const Navbar = () => {
  const { authUser } = useAuthContext();
  return (
    <nav className="bg-slate-700 text-white flex justify-between items-center py-4 px-12 ">
      <NavLink
        to="/"
        className="flex justify-center items-center gap-2 transition-all hover:text-sky-400"
      >
        <FilterDramaIcon fontSize="large" />
        <span className="text-2xl">Thoughts</span>
      </NavLink>

      <NavLink to="/profile" title="profile">
        <img
          src={authUser?.photoURL}
          alt="userProfile"
          className="w-12 rounded-full transition-all hover:ring-2 ring-sky-400 select-none"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
