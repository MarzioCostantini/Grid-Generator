import Nav from "./Components/Nav/Nav";
import Table from "./Components/tablegenerator/Table";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridGenerator from "./Pages/GridGenerator";
import ShadowGenerator from "./Pages/ShadowGenerator";
import LinearGradientGenerator from "./Pages/LinearGradientGenerator";
import Overview from "./Pages/Overview";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/grid-generator" element={<GridGenerator />}></Route>
          <Route path="/shadow-generator" element={<ShadowGenerator />}></Route>
          <Route
            path="/gradient-generator"
            element={<LinearGradientGenerator />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
