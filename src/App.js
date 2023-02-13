import Nav from "./Components/Nav/Nav";
import Table from "./Components/tablegenerator/Table";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GridGenerator from "./Pages/GridGenerator";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <GridGenerator />
      </div>
    </BrowserRouter>
  );
}

export default App;
