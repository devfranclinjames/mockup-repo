import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Masthead from "../components/Masthead";
import SearchNew from "../components/SearchNew";
import Games from "../components/Games";
import Divider from "../imgs/divider.svg";

function FullwidthLayout() {
  return (
    <>
      <header>
        <Navigation />
        <Masthead />
        <div className="mw-100 d-flex align-content-center gamess">
          <div className="align-self-center">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#searchToggleExternalContent"
              aria-controls="searchToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <br />
              <span className="text-center d-block w-100">Search</span>
              <span className="navbar-toggler-icon light"></span>
            </button>
          </div>
          <img className="align-self-center ml-4" src={Divider} alt="divider" />

          <Games />
        </div>
        <div className="collapse" id="searchToggleExternalContent">
          <div className="bg-light p-4">
            <SearchNew />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default FullwidthLayout;
