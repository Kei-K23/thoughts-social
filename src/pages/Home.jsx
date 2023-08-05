import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import FormDialog from "../components/FormDialog";
import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import { useDataContext } from "../context/dataContext";
import { useAuthContext } from "../context/authContext";
import ItemsList from "../components/ItemsList";
import Loading from "../components/Loading";

const Home = () => {
  const { addData, loading, allUsersTextData } = useDataContext();
  const { authUser } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddData = () => {
    const thoughtData = {
      uID: authUser.uid,
      uName: authUser?.displayName,
      text: data,
      createdAt: serverTimestamp(),
      uProfile: authUser?.photoURL,
    };
    addData(thoughtData);
    setOpen(false);
  };

  return (
    <div className="relative w-full h-[90vh] ">
      <h1 className="flex justify-center items-center mt-4 text-2xl transition-all hover:text-sky-500 drop-shadow-xl">
        <FilterDramaIcon /> Thoughts field
      </h1>
      {loading ? (
        <Loading size={5} />
      ) : (
        <ItemsList textData={allUsersTextData} />
      )}
      <button
        onClick={handleClickOpen}
        title="create new thoughts"
        className="z-50 p-3 rounded-full bg-black sticky bottom-16 left-10 hover:ring-2 ring-sky-400"
      >
        <MapsUgcIcon fontSize="large" className="text-white" />
      </button>
      <FormDialog
        open={open}
        handleClose={handleClose}
        setData={setData}
        handleAddData={handleAddData}
      />
    </div>
  );
};

export default Home;
