import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <SeoHeader />
        <div className="header-wrapper" style={{ backgroundColor: theme.body }}>
          <Fade top duration={1000} distance="20px">
            <header className="header">
              <a
                href="#home"
                className="logo"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("home");
                }}
              >
                <span style={{ color: theme.text }}></span>
              </a>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
              <ul className="menu" style={{ backgroundColor: theme.body }}>
                {[
                  { label: "Home", id: "home" },
                  { label: "Education", id: "education" },
                  { label: "Experience", id: "experience" },
                  { label: "Projects", id: "projects" },
                  { label: "Contact Me", id: "contact" },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      style={{ color: theme.text }}
                      onMouseEnter={(event) =>
                        onMouseEnter(event, theme.highlight)
                      }
                      onMouseOut={(event) => onMouseOut(event)}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(id);
                        const menuBtn = document.getElementById("menu-btn");
                        if (menuBtn) menuBtn.checked = false;
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </header>
          </Fade>
        </div>
        {/* spacer so content doesn't hide behind the fixed header */}
        <div style={{ height: "80px" }} />
      </>
    );
  }
}
export default Header;
