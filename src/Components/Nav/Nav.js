import logo from "../../assets/img/PowerRator_logo.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>PowerRator</h1>
      </div>
      <p>MAIN MENU</p>
    </nav>
  );
};

export default Nav;
