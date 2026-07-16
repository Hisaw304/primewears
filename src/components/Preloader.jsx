import logo from "../assets/plogo.png";

const Preloader = () => {
  return (
    <div className="pw-preloader">
      <div className="pw-preloader-content">
        <img src={logo} alt="Prime Wears" className="pw-preloader-logo" />

        <div className="pw-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
