import "./Header.css";
import darktheame from "../../assets/img/Darktheam_icon.svg";
import gridicon from "../../assets/img/GridIcon.svg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={gridicon} alt="icon" />
        <h1>CSS Grid Generator</h1>
      </div>
      <img src={darktheame} alt="icon darktheam" />
    </header>
  );
};

export default Header;
