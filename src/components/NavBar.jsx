import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <span>SS.</span>
      <Link to="/contact"> Contact </Link>
    </div>
  );
};

export default NavBar;
