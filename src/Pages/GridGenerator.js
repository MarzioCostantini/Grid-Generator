import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import Table from "../Components/tablegenerator/Table";
import { Helmet } from "react-helmet";

const GridGenerator = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSS Grid Generator - PowerRator</title>
        <meta
          name="description"
          content="With CSS Grid Generator you can easily and quickly
          build your grid layout - FREE"
        />
      </Helmet>
      <Nav />
      <Header
        text="CSS Grid Generator"
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
