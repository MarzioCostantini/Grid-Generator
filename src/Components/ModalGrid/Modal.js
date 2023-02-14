import React, { useState } from "react";
import "./Modal.css";
import closeIcon from "../../assets/img/close_icon.svg";
import codeIcon from "../../assets/img/code_icon.svg";
import copyIcon from "../../assets/img/copy_icon.svg";

export default function Modal({
  selectedItems,
  columns,
  rows,
  gapColumn,
  gapRow,
}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-full">
        <img src={codeIcon} alt="Icon" /> Get Code
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h4>Get the Code</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicingasdfasdfasdf
              elit. Provident perferendi
            </p>
            <article className="output">
              <div>
                <h3>
                  <span className="parent">.parent </span> &#123;
                </h3>
                <p>
                  <span className="operator">display:</span>
                  <span className="value">grid</span>;
                </p>
                <p>
                  <span className="operator">grid-template-columns:</span>
                  <span className="value">repeat({columns}, 1fr)</span>;
                </p>
                <p>
                  <span className="operator">grid-template-row:</span>
                  <span className="value">repeat({rows}, 1fr)</span>;
                </p>
                <p>
                  <span className="operator">grid-column-gap:</span>
                  <span className="value">{gapColumn}px</span>;
                </p>
                <p>
                  <span className="operator">grid-row-gap:</span>
                  <span className="value">{gapRow}px</span>;
                </p>
                <p className="last-klammer">&#125;</p>
              </div>
              <div>
                {selectedItems.map((selectedItem) => (
                  <div className="output-childs" key={selectedItem.id}>
                    <h3 style={{ color: `#${selectedItem.colorHex}` }}>
                      .child{selectedItem.id}
                      <span>
                        <span className="klammern">&#123;</span>{" "}
                        <span className="operator">grid-area:</span>
                        <span className="value">
                          {`${selectedItem.gridAreaString};`}
                        </span>
                        <span className="klammern">&#125;</span>
                      </span>
                    </h3>
                    <p></p>
                  </div>
                ))}
              </div>
            </article>
            <button className="btn-full">
              <img src={copyIcon} alt="copy icon" />
              Copy Code
            </button>
            <img
              className="close-modal"
              onClick={toggleModal}
              src={closeIcon}
              alt="Icon"
            />
          </div>
        </div>
      )}
    </>
  );
}
