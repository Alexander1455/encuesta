import { Outlet } from "react-router-dom";
import Navegador from "../shared/Navegador";

const LayoutNav = () => {
  return (
    <div className="grid grid-cols-[40rem,1fr]">
      <Navegador />
      <div className="overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutNav;
