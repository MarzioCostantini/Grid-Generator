import ComingSoon from "../Components/comingSoon/ComingSoon";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import { Helmet } from "react-helmet";

const LinearGradientGenerator = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSS Gradient Generator - PowerRator</title>
        <meta
          name="description"
          content="With CSS Gradient Generator you can easily create beautiful color gradients and use them in your CSS project - FREE"
        />
      </Helmet>
      <Nav />
      <Header text="CSS Gradient Generator" />
      <div className="content">
        <ComingSoon />
      </div>
    </>
  );
};

export default LinearGradientGenerator;
