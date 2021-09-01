import React from 'react'

import { Link } from "react-router-dom";
const Navbar = () => {
    return (
       
            <header className="gdlr-header-wrapper">
            <div className="gdlr-header-inner">
              <div className="gdlr-header-container container">
                <div style={{margin:"12px 0px 0px 0px"}} className="gdlr-logo">
                  <a href="index.html">
                    {" "}
                    <img style={{height:"4em"}} src="logo.png"/>
                  </a>
                  <div
                    className="gdlr-responsive-navigation dl-menuwrapper"
                    id="gdlr-responsive-navigation"
                  >
                    <button className="dl-trigger">Open Menu</button>
                    <ul
                      id="menu-main-menu"
                      className="dl-menu gdlr-main-mobile-menu"
                    >
                      {/* <li className="menu-item menu-item-home current-menu-item   menu-item-has-children">
                        <a href="/" aria-current="page">
                          Home
                        </a>
                      </li> */}
                      <li className="menu-item menu-item-has-children">
                        <Link to="/home">Home</Link>
                        <ul className="dl-submenu">
                          <li className="menu-item">
                            {/* <Link to="/about-institute">About Institute</Link> */}
                            <a href="/about-institute">About Institute</a>
                          </li>
                          <li className="menu-item">
                            <a href="/about">
                              About Conference
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <li className="menu-item menu-item-has-children">
                        <Link to="/sponsorship">Sponsorship</Link>
                      </li> */}
                      
                      
                      <li className="menu-item">
                        <a href="/speakers">Speakers</a>
                      </li>
                      <li className="menu-item">
                        <a href="/call-for-paper">Call for papers</a>
                      </li>
                      <li className="menu-item">
                        <a href="/paper-submission">Paper Submission</a>
                      </li>
                      <li className="menu-item">
                        <a href="/registration">Registrations</a>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="/committee">Committee</a>
                        <ul className="dl-submenu">
                          <li className="menu-item">
                            <a href="/comittee">
                              Steering Committee
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="speaker-3-columns-style-1.html">
                              Technical Program Committee
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="speaker-4-columns-style-1.html">
                              Advisory Committee
                            </a>
                          </li>
                          
                        </ul>
                      </li>
                      {/* <li className="menu-item menu-item-has-children">
                        <Link to="/call-for-paper">Papers</Link>
                        <ul className="dl-submenu">
                          <li className="menu-item">
                            <Link to="/call-for-paper">Call For Papers</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/paper-submission">
                              Paper Submission
                            </Link>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                </div>

                <div className="gdlr-navigation-wrapper">
                  <nav
                    className="gdlr-navigation"
                    id="gdlr-main-navigation"
                    role="navigation"
                  >
                    <ul id="menu-main-menu-1" className="sf-menu gdlr-main-menu">
                      {/* <li className="menu-item menu-item-home current-menu-item  gdlr-normal-menu">
                        <a href="/">Home</a>
                      </li> */}
                      <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-normal-menu">
                        <Link to="/about">Home</Link>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/about-institute">About Institute</Link>
                          </li>
                          <li className="menu-item">
                            <a href="/about">
                              About Conference
                            </a>
                          </li>
                        </ul>
                      </li>

                      {/* <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-normal-menu">
                        <Link to="sponsorship">Sponsorship</Link>
                      </li> */}
                      
                     
                      <li className="menu-itemmenu-item gdlr-normal-menu">
                        <a href="/speakers">Speakers</a>
                      </li>
                      <li className="menu-itemmenu-item gdlr-normal-menu">
                        <a href="/paper-submission">Paper Submission</a>
                      </li>
                      <li className="menu-itemmenu-item gdlr-normal-menu">
                        <a href="/call-for-paper">Call for PApers</a>
                      </li>
                      <li className="menu-itemmenu-item gdlr-normal-menu">
                        <a href="/registration">Registration</a>
                      </li>
                      <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-normal-menu">
                        <a href="/committee">Committee</a>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="/committee">
                              Steering Committee
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="speaker-3-columns-style-1.html">
                              Technical Program Committee
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="speaker-4-columns-style-1.html">
                              Advisory Committee
                            </a>
                          </li>
                          
                        </ul>
                      </li>
                      
                      {/* <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-normal-menu">
                        <Link to="/call-for-paper">Papers</Link>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/call-for-paper">Call For Papers</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/paper-submission">
                              Paper Submission
                            </Link>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </nav>{" "}
                  <span className="gdlr-menu-search-button-sep">|</span>{" "}
                  <i
                    className="fa fa-search icon-search gdlr-menu-search-button"
                    id="gdlr-menu-search-button"
                  ></i>
                  <div className="gdlr-menu-search" id="gdlr-menu-search">
                    <form method="get" id="searchform" action="index.html">
                      <div className="search-text">
                        <input
                          type="text"
                          value="Type Keywords"
                          name="s"
                          autoComplete="off"
                          data-default="Type Keywords"
                        />
                      </div>
                      <input type="submit" value></input>
                      <div className="clear"></div>
                    </form>
                  </div>
                  <div
                    className="gdlr-navigation-gimmick"
                    id="gdlr-navigation-gimmick"
                  ></div>
                  <div className="clear"></div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
            <div className="clear"></div>
          </header>
       
    )
}

export default Navbar
