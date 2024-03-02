import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <NavMenu>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="workexperiencee">
            Work Experience
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="Janakiram Sharmaa Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onclick="window.open('https://drive.google.com/file/d/11vwY0WqpLw5HjGYzlQPbskPk7nQhXfbn/view?usp=sharing')"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
