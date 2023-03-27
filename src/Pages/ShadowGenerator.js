import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import { Helmet } from "react-helmet";
import Shadowgenerator from "../Components/shadowgenerator/ShadowgeneratorEditor";

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
        <Shadowgenerator />
      </div>
    </>
  );
};

export default ShadowGenerator;
