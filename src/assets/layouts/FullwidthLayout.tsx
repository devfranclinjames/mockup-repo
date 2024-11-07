import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

function FullwidthLayout() {
  return (
    <>
      <Navigation></Navigation>
      <Outlet />
    </>
  );
}

export default FullwidthLayout;
