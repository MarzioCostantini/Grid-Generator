import ComingSoon from "../Components/comingSoon/ComingSoon";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import GridCard from "../Components/OverviewCard/GridCard";

const Overview = () => {
  return (
    <>
      <Nav />
      <Header text="Overview" />
      <div className="content">
        <GridCard />
      </div>
    </>
  );
};

export default Overview;
