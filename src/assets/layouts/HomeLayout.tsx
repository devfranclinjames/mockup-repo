import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Masthead from "../components/Masthead";
import Search from "../components/Search";
import Games from "../components/Games";
import Divider from "../imgs/divider.svg";
import AllApps from "../components/AllApps";
import { useState } from "react";

function HomeLayout() {
  const [isVisible, setIsVisible] = useState(false);

  // toggle
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <header>
        <Navigation />
        <Masthead />
        <div className="d-flex align-items-center container mw-100 gamess">
          <button onClick={toggleDiv}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <br />
            Search
          </button>
          <img className="align-self-center ml-4" src={Divider} alt="divider" />
          {isVisible && (
            <div
              style={{
                marginTop: "20px",
                padding: "10px",
                border: "1px solid black",
              }}
            >
              <Search />
            </div>
          )}
          <Games />
        </div>
      </header>
      {!isVisible && <AllApps />}
      <Outlet />
    </>
  );
}

export default HomeLayout;
