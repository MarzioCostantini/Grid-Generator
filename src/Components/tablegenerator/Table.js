import React, { useState } from "react";
import { SelectableGroup, DeselectAll } from "react-selectable-fast";
import Box from "./Box";
import "./Tablet.css";
import { useEffect } from "react";

import codeIcon from "../../assets/img/code_icon.svg";
import Trashbin from "../../assets/img/Binn_icon";
import Modal from "../ModalGrid/Modal";

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

  //MODAL BOX

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
    <main className="content grid-generator">
      <section className="input-area">
        <label for="column">Colums:</label>
        <input
          id="column"
          type="number"
          value={columns}
          onChange={(e) => setColumn(Number(e.target.value))}
        />
        <label for="rows">Rows</label>
        <input
          id="rows"
          type="number"
          value={rows}
          onChange={(e) => setRow(Number(e.target.value))}
        />
        <label for="gapColumn">Column GAP in PX</label>
        <input
          value={gapColumn}
          type="number"
          onChange={(e) => setGapColumn(Number(e.target.value))}
        />
        <label for="gapRow">Row GAP in PX</label>
        <input
          value={gapRow}
          id="gapRow"
          type="number"
          onChange={(e) => setGapRow(Number(e.target.value))}
        />
        <div>
          <Modal
            selectedItems={selectedItems}
            rows={rows}
            columns={columns}
            gapColumn={gapColumn}
            gapRow={gapRow}
          />
          <DeselectAll className="selectable-button">
            <button className="btn-border">
              <Trashbin /> Reset Grid
            </button>
          </DeselectAll>
        </div>
      </section>

      <section className="grid-area">
        <SelectableGroup
          className="main"
          clickClassName="tick"
          // enableDeselect
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
      </section>

      {/* <section className="output">
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

          
        </article>
      
      </section> */}
    </main>
  );
}
