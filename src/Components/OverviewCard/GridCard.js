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
            <h4> CSS Grid Generator</h4>
            <p>
              With this CSS Grid Generator you can easily and quickly build your
              grid layout.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridCard;
