import Nav from "./Components/Nav/Nav";
import Table from "./Components/tablegenerator/Table";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridGenerator from "./Pages/GridGenerator";
import ShadowGenerator from "./Pages/ShadowGenerator";
import LinearGradientGenerator from "./Pages/LinearGradientGenerator";
import Overview from "./Pages/Overview";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> PowerRator - Your all in one CSS Generator</title>
        <meta
          name="description"
          content="Your all in one PowerRator tool when it comes to CSS. Whether a complex CSS grid layout, a shadow or beautiful gradients. Try it now, FREE! "
        />
      </Helmet>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/grid-generator" element={<GridGenerator />} />
            <Route path="/shadow-generator" element={<ShadowGenerator />} />
            <Route
              path="/gradient-generator"
              element={<LinearGradientGenerator />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
