import ComingSoon from "../Components/comingSoon/ComingSoon";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";

const LinearGradientGenerator = () => {
  return (
    <>
      <Nav />
      <Header />
      <div className="content">
        <ComingSoon />
      </div>
    </>
  );
};

export default LinearGradientGenerator;
