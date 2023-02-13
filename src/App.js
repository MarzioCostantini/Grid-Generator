import Nav from "./Components/Nav/Nav";
import Table from "./Components/tablegenerator/Table";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
     <div>
      <Nav />
      {/* <Table /> */}
    </div>
    </BrowserRouter>
   
  );
}

export default App;
