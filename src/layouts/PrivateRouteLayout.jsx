import { Navigate, Outlet, useLoaderData } from "react-router-dom";

const PrivateRouteLayout = () => {
  const authUser = useLoaderData();

  return authUser !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouteLayout;

export const loader = () => {
  const authUser = localStorage.getItem("authUser");
  return authUser;
};
