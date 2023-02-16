import ComingSoon from "../Components/comingSoon/ComingSoon";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import { Helmet } from "react-helmet";

const ShadowGenerator = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSS Shadow Generator - PowerRator</title>
        <meta
          name="description"
          content="Create beautiful CSS shadows with our CSS shadow generator. Free and uncomplicated!"
        />
      </Helmet>
      <Nav />
      <Header text=" CSS Shadow Generator" />
      <div className="content">
        <ComingSoon />
      </div>
    </>
  );
};

export default ShadowGenerator;
