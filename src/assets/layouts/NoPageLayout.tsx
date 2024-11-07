import Navigation from "../components/Navigation";
import { Link, Outlet } from "react-router-dom";

function NoPageLayout() {
  return (
    <>
      <Navigation></Navigation>
      <p>
        No page yet back to <Link to="/">Home</Link>
      </p>
      <Outlet />
    </>
  );
}

export default NoPageLayout;
