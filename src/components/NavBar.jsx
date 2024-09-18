import Button from "./Button";

import Ambulance from "../assets/ambulance.svg";
import TAC from "../assets/tac.svg";
import Login from "../assets/login.svg";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="container-align-vertical">
        <div className="left-container-icons">
          <Button className="button-white">
            <img src={TAC} alt="" />
          </Button>
          <Button className="button-white">
            <img src={Ambulance} alt="" />
          </Button>
        </div>
        <Button className="button-white">
          <img src={Login} alt="" />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
