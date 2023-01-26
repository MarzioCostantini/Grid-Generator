import React, { useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import Box from "./Box";
import "../Components/Tablet.css";
import { useEffect } from "react";

export default function Table() {
  const [column, setColumn] = useState(5);
  const [row, setRow] = useState(5);
  const [kacheln, setKacheln] = useState(column * row);

  console.log({ kacheln });
  const [gapColumn, setGapColumn] = useState(0);
  const [gapRow, setGapRow] = useState(0);

  console.log({ column }, { row }, { gapColumn }, { gapRow });

  //const [item, setItem] = useState(16);
  const [itemArray, setItemArray] = useState([]);

  console.log({ itemArray });

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
    //console.log("item unmount");
  };

  const handleSelecting = (items) => {
    //console.log("selecting:", items);
  };

  const handleSelectionFinish = (items) => {
    //console.log("finish selecting:", items);
  };
  const handleSelectionClear = (items) => {
    // console.log("selection cleared", items);
  };

  return (
    <div className="App">
      <button onClick={handleSelectionClear}> Clear</button>
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
            <Box key={index} />
          ))}
        </SelectableGroup>
      </div>
    </div>
  );
}
