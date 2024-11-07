import Slider from "./Slider";
import Attention from "./Attention";

function Masthead() {
  return (
    <>
      <div className="masthead position-relative mt-5">
        <Slider></Slider>
        <div className="position-absolute mastheaditems">
          <strong className="text-light text-uppercase">RESCUE</strong>
          <br />
          <strong className="text-yellow text-uppercase">BONUS</strong>
          <br />
          <strong className="text-light text-uppercase">
            WE ARE HERE
            <br />
            FOR YOU
          </strong>
        </div>
      </div>
      <Attention></Attention>
    </>
  );
}

export default Masthead;
