import react from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Unsplash_Symbol.png";
import { ReactComponent as GithubFork } from "../assets/github.svg"

const NavI = () => {
  return (
    <div className="container mt-2">
      <div className="header--class">
        <Link to="/">
          <span className="img-logo-wrapper">
            <img src={logo} className="img-logo" />
          </span>
        </Link>

        <h1 style={{ fontWeight: "bold" }}>Image Search App</h1>
      </div>
      <a
        href="https://github.com/samadritsarkar2/imageSearchApp"
        className="github-corner"
        aria-label="View source on GitHub"
        target="_"
      >
        <GithubFork />
      </a>
    </div>
  );
};

export default NavI;
