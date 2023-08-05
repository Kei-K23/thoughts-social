import { useAuthContext } from "../context/authContext";

const UserInfo = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <h1 className="m-8 text-2xl text-center">
        {authUser?.displayName}'s Profile
      </h1>
      <div className="w-11/12 md:w-10/12 m-auto flex items-center text-xl p-4 bg-slate-300">
        <span className="mr-8">Profile Picture:</span>
        <img
          src={authUser?.photoURL}
          alt="userProfile"
          className="w-20 md:w-24  rounded-md"
        />
      </div>
      <div className="w-11/12 md:w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-xl bg-slate-300">
        <div className="bg-blue-400 py-4 px-2 rounded-md transition-all hover:bg-blue-500">
          Name: <span className="font-medium">{authUser?.displayName}</span>
        </div>
        <div className="bg-blue-400 py-4 px-2 rounded-md transition-all hover:bg-blue-500">
          Email: <span className="font-medium"> {authUser?.email}</span>
        </div>
        <div className="bg-blue-400 py-4 px-2 rounded-md transition-all hover:bg-blue-500">
          Acc created:{" "}
          <span className="font-medium">{authUser?.metadata.creationTime}</span>
        </div>
        <div className="bg-blue-400 py-4 px-2 rounded-md transition-all hover:bg-blue-500">
          Last sign-in:{" "}
          <span className="font-medium">
            {authUser?.metadata.lastSignInTime}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
