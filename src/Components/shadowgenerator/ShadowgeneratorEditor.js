import { useState } from "react";
// import { TwitterPicker } from "react-color";
import "./ShadowgeneratorEditor.css";
const Shadowgenerator = () => {
  const [xaxis, setXaxis] = useState(0);
  const [yaxis, setYaxis] = useState(0);
  const [blur, setBlur] = useState(50);
  const [color, setColor] = useState("#000000");

  console.log({ color });

  return (
    <main className="shadow">
      <section className="input-area">
        <label htmlFor="horizont">Horizontally</label>
        <div className="range">
          <input
            id="horizont"
            type="range"
            min={-150}
            max={150}
            value={xaxis}
            onChange={(event) => setXaxis(Number(event.target.value))}
          />
          <p className="output-range"> {xaxis}px</p>
        </div>

        <label htmlFor="vertic">Vertically</label>
        <div className="range">
          <input
            id="vertic"
            type="range"
            min={-150}
            max={150}
            value={yaxis}
            onChange={(event) => setYaxis(Number(event.target.value))}
          />
          <p className="output-range"> {yaxis}px</p>
        </div>

        <label htmlFor="blur">Blur</label>
        <div className="range">
          <input
            id="blur"
            type="range"
            min={0}
            max={250}
            value={blur}
            onChange={(event) => setBlur(Number(event.target.value))}
          />
          <p className="output-range"> {blur}px</p>
        </div>

        <label htmlFor="color">Color</label>
        <div className="range">
          {/* <TwitterPicker /> */}
          {/* <AlphaPicker /> */}
          <input
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <p className="output-range"> {color}</p>
        </div>
      </section>
      <section className="preview">
        <h4>Live Preview</h4>
        <article
          style={{ boxShadow: `${xaxis}px ${yaxis}px ${blur}px ${color}` }}
        ></article>
      </section>
    </main>
  );
};

export default Shadowgenerator;
