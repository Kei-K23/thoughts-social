import { Link } from "react-router-dom";
import ItemsList from "../components/ItemsList";
import UserInfo from "../components/UserInfo";
import Logout from "../components/Logout";
import { useDataContext } from "../context/dataContext";
import Loading from "../components/Loading";
const Profile = () => {
  const { authUserTextData, loading } = useDataContext();
  return (
    <div className="mt-4 mb-8 relative">
      <UserInfo />
      {loading ? (
        <Loading size={3} />
      ) : (
        <ItemsList textData={authUserTextData} />
      )}
      <Link className="m-auto block text-center mt-4" to={"/"}>
        <p className="text-xl underline"> Back to thoughts field</p>
      </Link>
      <Logout />
    </div>
  );
};

export default Profile;
