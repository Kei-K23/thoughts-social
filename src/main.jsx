import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthContextProvider } from "./context/authContext";
import PrivateRouteLayout, {
  loader as userEmailLoader,
} from "./layouts/PrivateRouteLayout";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { DataContextProvider } from "./context/dataContext";
import ErrorLayout from "./layouts/ErrorLayout";

const root = createBrowserRouter([
  {
    element: <PrivateRouteLayout />,
    loader: userEmailLoader,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "profile/",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <RouterProvider router={root} />
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
