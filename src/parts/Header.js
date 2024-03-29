import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import { useLocation } from "react-router-dom";

export default function Header({ isCentered }) {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };

  if (isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                STAY<span className="text-gray-900">CATION.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  
    const stylingUl = isActive ? {position: "absolute", left: '-16px', right: '-16px', padding: '0 16px'} : {}
  return (
    <Fade>
      <header className="spacing-sm" style={{ zIndex: 10 }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setActive((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={[
                "collapse navbar-collapse",
                isActive ? "show" : "",
              ].join(" ")}
            >
              <ul className="navbar-nav ml-auto bg-white" style={stylingUl}>
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
