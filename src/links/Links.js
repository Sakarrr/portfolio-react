import { Route } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";

const Links = () => {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/about-me" component={AboutMe} exact />
      <Route path="/contact" component={Contact} exact />
    </>
  );
};

export default Links;
