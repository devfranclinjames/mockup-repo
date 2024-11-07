import Wallet from "../imgs/wallet.svg";
import Divider from "../imgs/divider.svg";
import User from "../imgs/user.svg";

function Navigation() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-light fixed-top d-flex"
        id="mainNav"
      >
        <div>
          <div className="d-flex">
            <div className="align-self-center">
              <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-light p-4">
                  <h4>Good Luck</h4>
                  <span className="text-muted">and have fun!</span>
                </div>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon light" />
              </button>
            </div>
            <div className="align-self-center ml-3">
              <img
                className=""
                src="https://fun88-six.vercel.app/assets/header/fun88.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <div className="align-self-center">
              <img src={Wallet} />
            </div>
            <div className="align-self-center ml-1">
              <b className="text-base text-primary align-self-center">
                $8,888.8
              </b>
            </div>
            <div className="align-self-center ml-3">
              <img className="align-self-center" src={Divider} alt="..." />
            </div>
            <div className="align-self-center ml-3">
              <img className="align-self-center" src={User} alt="..." />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
