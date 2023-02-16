import GridIcon from "../../assets/img/Grid_Icon";
import { Link } from "react-router-dom";
import "./Card.css";

const GridCard = () => {
  return (
    <Link to="/grid-generator">
      <div className="card-item">
        <div className="card-wrapper-inner">
          <GridIcon />
          <div>
            <h4>Grid Generator</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              porro unde eius.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridCard;
