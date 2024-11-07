import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Masthead from "../components/Masthead";
import Search from "../components/Search";
import Games from "../components/Games";
import Divider from "../imgs/divider.svg";
// import { useState } from "react";

function HomeLayout() {
  // const [isVisible, setIsVisible] = useState(false);

  // toggle
  // const toggleDiv = () => {
  //   setIsVisible(!isVisible);
  // };

  return (
    <>
      <header>
        <Navigation />
        <Masthead />
        <div className="mw-100 d-flex align-content-center gamess">
          <div className="align-self-center">
            <div className="collapse" id="searchToggleExternalContent">
              <div className="bg-light p-4">
                <Search />
              </div>
            </div>
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
              Search
              <span className="navbar-toggler-icon light"></span>
            </button>
          </div>
          <img className="align-self-center ml-4" src={Divider} alt="divider" />

          <Games />
        </div>
      </header>
      {/* {isVisible && <Search />}
      {!isVisible && <AllApps />} */}

      <Outlet />
    </>
  );
}

export default HomeLayout;
