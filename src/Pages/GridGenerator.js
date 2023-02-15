import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import Table from "../Components/tablegenerator/Table";

const GridGenerator = () => {
  return (
    <>
      <Nav />
      <Header text="Grid Generator" />
      <div className="content">
        <Table />
      </div>
    </>
  );
};

export default GridGenerator;
