import React, { useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import Box from "./Box";
import "../Components/Tablet.css";
import { useEffect } from "react";

export default function Table() {
  const [items, setItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]);
  const [column, setColumn] = useState(5);
  const [row, setRow] = useState(5);
  const [gap, setGap] = useState(0);

  const [item, setItem] = useState(16);

  const [itemTest, setItemTest] = useState([]);
  console.log({ itemTest });

  useEffect(() => {
    setItem(row * column);
    for (let index = 1; index < item; index++) {
      const element = [index];
      itemTest.push(element);
    }
  }, [row, column]);

  console.log({ item });
  // useeffect = Colomn * row = anzahl

  const handleSelectedItemUnmount = () => {
    console.log("item unmount");
  };

  const handleSelecting = (items) => {
    //console.log("selecting:", items);
  };

  const handleSelectionFinish = (items) => {
    console.log("finish selecting:", items);
  };
  const handleSelectionClear = (items) => {
    console.log("selection cleared", items);
  };

  return (
    <div className="App">
      <button onClick={handleSelectionClear}> Clear</button>
      <input
        placeholder="Colums anzahl..."
        type="number"
        onChange={(e) => setColumn(e.target.value)}
      />
      <input
        placeholder="Row anzahl..."
        type="number"
        onChange={(e) => setRow(e.target.value)}
      />
      <input
        placeholder="GAP in px eingeben..."
        type="number"
        onChange={(e) => setGap(e.target.value)}
      />
      <div>
        <SelectableGroup
          className="main"
          clickClassName="tick"
          enableDeselect
          tolerance={0}
          globalMouse={false}
          allowClickWithoutSelected={false}
          duringSelection={handleSelecting}
          onSelectionClear={handleSelectionClear}
          onSelectionFinish={handleSelectionFinish}
          onSelectedItemUnmount={handleSelectedItemUnmount}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${column}, 1fr)`,
            gridTemplateRows: `repeat(${row}, 1fr)`,
          }}
        >
          {console.log({ column })}
          {/* {Array(column)
            .fill(column)
            .map((index) => (
              <Box key={index} num={index} />
            ))} */}
          {items.map((index) => (
            <Box key={index} />
          ))}
        </SelectableGroup>
      </div>
    </div>
  );
}
