import { Link } from "react-router-dom";
import Newsvg from "../imgs/new.svg";
import Slots from "../imgs/slots.svg";
import Live from "../imgs/live.svg";
import Jackpots from "../imgs/jackpots.svg";
import Cards from "../imgs/cards.svg";
import Bingo from "../imgs/bingo.svg";
import Others from "../imgs/others.svg";

const Games = () => {
  return (
    <>
      <section className="overflow">
        <ul className="d-flex text-center ">
          <li className="nav-link">
            <i className="fa-solid fa-fire" />
            <br />
            <Link to="/mockup-repo" className="nav-item">
              START
            </Link>
          </li>
          <li className="nav-link">
            <img src={Newsvg} alt="" />
            <br />
            <Link to="/new" className="nav-item">
              NEW
            </Link>
          </li>
          <li className="nav-link">
            <img src={Slots} alt="" />
            <br />
            <Link to="/" className="nav-item">
              SLOTS
            </Link>
          </li>
          <li className="nav-link">
            <img src={Live} alt="" />
            <br />
            <Link to="/" className="nav-item">
              LIVE
            </Link>
          </li>
          <li className="nav-link">
            <img src={Jackpots} alt="" />
            <br />
            <Link to="/" className="nav-item">
              JACKPOTS
            </Link>
          </li>
          <li className="nav-link">
            <img src={Cards} alt="" />
            <br />
            <Link to="/" className="nav-item">
              TABLE GAMES
            </Link>
          </li>
          <li className="nav-link">
            <img src={Bingo} alt="" />
            <br />
            <Link to="/" className="nav-item">
              BINGO
            </Link>
          </li>
          <li className="nav-link">
            <img src={Others} alt="" />
            <br />
            <Link to="/" className="nav-item">
              OTHERS
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Games;
