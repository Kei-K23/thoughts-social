import { useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { useAuthContext } from "../context/authContext";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const Login = () => {
  const { googleSignIn } = useAuthContext();
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-11/12 md:w-10/12 min-h-screen m-auto py-4 px-6 bg-slate-400 rounded-md flex justify-center items-center flex-col">
      <h1 className="text-4xl font-medium mb-4 text-white hover:text-sky-400">
        <FilterDramaIcon className="text-sky-400" fontSize="large" />
        Thoughts
      </h1>
      <h2 className="text-3xl mb-3">Share your thoughts with us</h2>
      <p className="text-slate-800 text-xl mb-2">
        First Login to use
        <span className="font-medium"> Thoughts</span>
      </p>
      <GoogleButton className="mt-8" onClick={handleSignIn} />
    </div>
  );
};

export default Login;
