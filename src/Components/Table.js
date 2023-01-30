import React, { useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import Box from "./Box";
import "../Components/Tablet.css";
import { useEffect } from "react";

export default function Table() {
  const [column, setColumn] = useState(5);
  const [row, setRow] = useState(5);
  const [kacheln, setKacheln] = useState(column * row);

  const [gapColumn, setGapColumn] = useState(0);
  const [gapRow, setGapRow] = useState(0);

  const [itemArray, setItemArray] = useState([]);

  const [color, setColor] = useState();

  const [selectedItems, setSelectedItems] = useState([]);
  // const [selectCount, setSelectCount] = useState(0);

  console.log({ selectedItems });
  //console.log({ selectCount });

  /*
      LOGIC VON Grid-area

      Im Beispiel "grid-area: 1 / 1 / 3 / 3;" bedeutet dies:

      grid-row-start: 1
      grid-column-start: 1
      grid-row-end: 3
      grid-column-end: 3
*/

  const getRandomColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  useEffect(() => {
    setKacheln(column * row);
  }, [row, column]);

  useEffect(() => {
    setItemArray([]);
    for (let index = 0; index < kacheln; index++) {
      setItemArray((value) => [...value, index]);
    }
  }, [kacheln]);

  const handleSelectedItemUnmount = () => {
    // console.log("item unmount");
  };

  const handleSelecting = (items) => {
    //console.log("selecting:", items);
  };

  const handleSelectionFinish = (items) => {
    getRandomColor();

    //console.log("finish selecting:", items);

    // Schaut welche Elemente auf einmal Ausgewählt wurden und  pusht die zahlen erst in ein Array Object, dann in den kompletten State
    let selectedIndexArray = [];
    for (let i = 0; i < items.length; i++) {
      let selectedIndex = items[i].props.index;
      selectedIndexArray.push(selectedIndex);
    }567898
    const newObjectofSelectedItems = {
      selctedItem: selectedIndexArray,
      colorHex: color,
    };
    setSelectedItems([...selectedItems, newObjectofSelectedItems]);
  };

  const handleSelectionClear = (items) => {
    // console.log("selection cleared", items);
  };

  return (
    <div className="App">
      <button onClick={handleSelectionClear}> RESTE GRID</button>
      <input
        placeholder="Colums anzahl..."
        type="number"
        value={column}
        onChange={(e) => setColumn(Number(e.target.value))}
      />
      <input
        placeholder="Row anzahl..."
        type="number"
        value={row}
        onChange={(e) => setRow(Number(e.target.value))}
      />
      <input
        placeholder="GAP Column in px eingeben..."
        type="number"
        onChange={(e) => setGapColumn(Number(e.target.value))}
      />
      <input
        placeholder="GAP Row in px eingeben..."
        type="number"
        onChange={(e) => setGapRow(Number(e.target.value))}
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
            columnGap: `${gapColumn}px`,
            rowGap: `${gapRow}px`,
          }}
        >
          {itemArray.map((index) => (
            <Box key={index} index={index} color={color} />
          ))}
        </SelectableGroup>
      </div>
    </div>
  );
}
