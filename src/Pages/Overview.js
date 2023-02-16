import ComingSoon from "../Components/comingSoon/ComingSoon";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import GridCard from "../Components/OverviewCard/GridCard";
import { Helmet } from "react-helmet";

const Overview = () => {
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
      <Nav />
      <Header text="Overview" />
      <div className="content">
        <GridCard />
      </div>
    </>
  );
};

export default Overview;
