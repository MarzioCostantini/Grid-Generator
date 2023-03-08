import logo from "../../assets/img/PowerRator_logo.svg";

import dotsIcon from "../../assets/img/Dots_icon.svg";
import arrowIcon from "../../assets/img/Arrow_Icon.svg";

import "./Nav.css";

import { NavLink, Link } from "react-router-dom";
import GridIcon from "../../assets/img/Grid_Icon";
import OverviewIcon from "../../assets/img/OverviewIcon";
import ShadowIcon from "../../assets/img/ShadowIcon";
import LineaIcon from "../../assets/img/LineaIcon";

const Nav = () => {
  return (
    <section className="nav-wrapper">
      <div className="top-element">
        <nav>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo PowerRator" />
            <h2>PowerRator</h2>
          </Link>
          <p className="main-text">MAIN MENU</p>

          <NavLink to="/" className="nav-item">
            <OverviewIcon />
            <h3>Overview</h3>
          </NavLink>
          <NavLink to="/grid-generator" className="nav-item">
            <GridIcon />
            <h3>Grid Generator</h3>
          </NavLink>
          {/* <NavLink to="/shadow-generator" className="nav-item">
            <ShadowIcon />
            <h3>Shadow Generator</h3>
          </NavLink> */}
          {/* <NavLink to="/gradient-generator" className="nav-item">
            <LineaIcon />
            <h3>Gradient Generator</h3>
          </NavLink> */}
        </nav>
      </div>

      <div className="bottom-element">
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://www.paypal.com/paypalme/marziocostantini"
        >
          <div className="coffee">
            <img src={dotsIcon} alt="icon" />
            <h4>Buy us a Coffee</h4>
            <div className="circle"></div>
            <img src={arrowIcon} alt="icon" />
          </div>
        </a> */}
        <article>
          <p>PowerRator</p>
          <p>
            Made with ♥ by
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/MarzioCostantini"
            >
              Marzio
            </a>
            &
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ahmdNasr"
            >
              Ahmed
            </a>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Nav;
