import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        {" "}
        <span>SS.</span>{" "}
      </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
};

export default NavBar;
