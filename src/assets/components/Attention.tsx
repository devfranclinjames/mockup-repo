import Bellico from "../imgs/bell.svg";

function Attention() {
  return (
    <>
      <div className="d-flex ml-2">
        <img className="align-self-center" src={Bellico} alt="" />
        <div className="align-self-center ml-1">
          Congratulations, participant! Outstanding Winner!
        </div>
      </div>
    </>
  );
}

export default Attention;
