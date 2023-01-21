import React from "react";
import { createSelectable } from "react-selectable-fast";

function Box(props) {
  const { selectableRef, isSelected, isSelecting } = props;
  return (
    <div
      ref={selectableRef}
      className="box"
      style={{
        background: isSelected ? "crimson" : isSelecting ? "blue" : "gray",
      }}
    >
      {" "}
      <p>{props.key}</p>
    </div>
  );
}

export default createSelectable(Box);
