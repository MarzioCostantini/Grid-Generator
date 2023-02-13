import React, { useState } from "react";
import { SelectableGroup, DeselectAll } from "react-selectable-fast";
import Box from "./Box";
import "../Components/Tablet.css";
import { useEffect } from "react";

function gridAreaString(selectedCellIndezies, tableColumns) {
  const cells = selectedCellIndezies
    .sort((index1, index2) => index1 - index2)
    .map((cellIdx) => ({
      cellIdx,
      row: Math.ceil((cellIdx + 1) / tableColumns),
      column: cellIdx - Math.floor(cellIdx / tableColumns) * tableColumns + 1,
    }));

  const first = cells[0];
  const last = cells[cells.length - 1];

  console.log({ first, last });
  const gridAreaStart = `${first.row} / ${first.column}`;
  const gridAreaEnd = `${last.row + 1} / ${last.column + 1}`;
  return `${gridAreaStart} / ${gridAreaEnd}`;
}

export default function Table() {
  const [columns, setColumn] = useState(5);
  const [rows, setRow] = useState(5);
  const [kacheln, setKacheln] = useState(columns * rows);
  const [id, setId] = useState(1);

  const [gapColumn, setGapColumn] = useState(0);
  const [gapRow, setGapRow] = useState(0);

  const [itemArray, setItemArray] = useState([]);

  const [selectedItems, setSelectedItems] = useState([]);

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
    return randomColor;
  };

  useEffect(() => {
    setKacheln(columns * rows);
  }, [rows, columns]);

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
    const color = getRandomColor();

    //console.log("finish selecting:", items);

    const startIdx = selectedItems
      .map(({ selectedItem }) => selectedItem.length)
      .reduce((sum, length) => sum + length, 0);

    let selectedIndexArray = items
      .slice(startIdx)
      .map((item) => item.props.index);

    if (!selectedIndexArray || selectedIndexArray.length === 0) {
      return;
    }

    const newObjectofSelectedItems = {
      id: id,
      selectedItem: selectedIndexArray,
      gridAreaString: gridAreaString(selectedIndexArray, columns),
      colorHex: color,
    };
    setSelectedItems([...selectedItems, newObjectofSelectedItems]);
    setId(id + 1);
  };

  console.log(selectedItems);

  const handleSelectionClear = (items) => {
    // console.log("selection cleared", items);
  };

  return (
    <div className="App">
      <DeselectAll className="selectable-button">
        <button>Clear selection</button>
      </DeselectAll>
      <input
        placeholder="Colums anzahl..."
        type="number"
        value={columns}
        onChange={(e) => setColumn(Number(e.target.value))}
      />
      <input
        placeholder="Row anzahl..."
        type="number"
        value={rows}
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
          //enableDeselect
          tolerance={0}
          globalMouse={false}
          allowClickWithoutSelected={false}
          duringSelection={handleSelecting}
          onSelectionFinish={handleSelectionFinish}
          onSelectedItemUnmount={handleSelectedItemUnmount}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            columnGap: `${gapColumn}px`,
            rowGap: `${gapRow}px`,
          }}
        >
          {itemArray.map((index) => {
            const selected = selectedItems.find(({ selectedItem }) =>
              selectedItem.includes(index)
            );
            const color = selected ? selected.colorHex : undefined;
            return <Box key={index} index={index} color={color} />;
          })}
        </SelectableGroup>
      </div>

      <section className="output">
        <h1>Output:</h1>
        <article>
          <div>
            <h3>.parent</h3>
            <p>display: grid;</p>
            <p>grid-template-columns: repeat({columns}, 1fr);</p>
            <p>grid-template-row: repeat({rows}, 1fr);</p>
            <p>grid-column-gap: {gapColumn}px;</p>
            <p>grid-row-gap: {gapRow}px;</p>
          </div>

          <div>
            {selectedItems.map((selectedItem) => (
              <div key={selectedItem.id}>
                <h3>.child{selectedItem.id}</h3>
                <p>grid-area: {selectedItem.gridAreaString};</p>
              </div>
            ))}
          </div>
        </article>
        <button> Copy Code</button>
      </section>
    </div>
  );
}
