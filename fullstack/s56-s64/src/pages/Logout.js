import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../UserContext";

export default function Logout() {
  // localStorage.clear();
  const { unsetUser, setUser } = useContext(UserContext);

  // Clear information to the local storage
  unsetUser();

  useEffect(() => {
    setUser({ token: null });
  }, []);

  return <Navigate to="/login" />;
}
