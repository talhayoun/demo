import { NavLink } from "react-router-dom";
import {navLinks} from "../data/Nav";

const Nav = () => {
  return (
    <header>
      <div className="container">
        <section className="logo">
          <strong>my</strong>
          <span className="blue_dot"></span>
          <span>Logo</span>
        </section>
        <nav>
          {navLinks.map((curLink, index) => <NavLink key={index} to={curLink.path}>{curLink.link}</NavLink>)}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
