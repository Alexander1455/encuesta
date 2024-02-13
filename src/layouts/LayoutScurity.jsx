import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useTokenStore } from "../store/useTokenStore";

const LayoutScurity = () => {
  const { token } = useTokenStore();

  if (!token) {
    return <Navigate to="/pages/Login" />;
  }

  // verificar si el token es valido

  return <Outlet />;
};

export default LayoutScurity;
