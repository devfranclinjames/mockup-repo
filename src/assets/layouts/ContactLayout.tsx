import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <>
      <Navigation></Navigation>
      <Outlet />
    </>
  );
}

export default ContactLayout;
