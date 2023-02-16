import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import Table from "../Components/tablegenerator/Table";

const GridGenerator = () => {
  return (
    <>
      <Nav />
      <Header
        text="Grid Generator"
        description="With this CSS Grid Generator you can easily and quickly
          build your grid layout. Just enter your desired Colums, Rows and gap
          on the right side and drag with your mouse pointer over the boxes.
          They will be marked automatically. If you now click on
           Get Cod you will get your finished code."
      />
      <div className="content">
        <Table />
      </div>
    </>
  );
};

export default GridGenerator;
