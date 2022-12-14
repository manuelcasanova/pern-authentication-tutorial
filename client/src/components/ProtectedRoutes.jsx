// import { useContext } from "react";
// import { useLocation } from "react-router";
// import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../App";

// const useAuth = () => {
//   const { user } = useContext(UserContext);
//   return user && user.loggedIn;
// };

// export default function ProtectedRoutes () {
//   const location = useLocation();
//   const isAuth = useAuth();
//   return isAuth ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" replace state={{ from: location }} />
//   );
// }

import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../App";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

export default function ProtectedRoutes () {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}