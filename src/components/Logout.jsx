import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser, signOutUser } = useAuthContext();

  const navigate = useNavigate();

  const handleIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  const handleSignOut = async () => {
    await signOutUser();
    navigate();
  };
  return (
    <>
      <div>
        {isOpen ? (
          <div
            className={
              "flex justify-center items-center flex-col text-center w-5/12 p-4 text-2xl m-auto mt-8"
            }
          >
            <h2 className="mb-2">Hey {authUser?.displayName}!</h2>
            <h2>
              Are you sure to{" "}
              <span className="text-red-500 font-medium"> Logout?</span>
            </h2>
            <div className="mt-4">
              <button
                onClick={handleSignOut}
                className="py-2 px-4 mb-4 w-full bg-red-500 text-xl text-white rounded-md hover:bg-red-600 active:bg-red-700 mr-8"
              >
                Confirm
              </button>
              <button
                onClick={handleIsOpen}
                className="py-2 px-4 bg-sky-500 text-xl w-full text-white rounded-md hover:bg-sky-600 active:bg-sky-700"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            className="m-auto mt-8 block py-4 px-8 text-xl rounded-lg bg-red-500 text-white font-medium transition-all hover:bg-red-600 hover:ring-1 hover:ring-red-800 hover:scale-110 active:bg-red-700"
            onClick={handleIsOpen}
          >
            Log Out
          </button>
        )}
      </div>
    </>
  );
};

export default Logout;
