import "./Header.css";
import darktheame from "../../assets/img/Darktheam_icon.svg";

const Header = ({ text, description }) => {
  return (
    <header>
      <div>
        <h1>{text}</h1>
        <p>{description}</p>
      </div>
      <img src={darktheame} alt="icon darktheam" />
    </header>
  );
};

export default Header;
