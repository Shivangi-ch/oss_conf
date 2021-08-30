import React from 'react'

import { Link } from "react-router-dom";
const Navbar = () => {
    return (
       
            <header class="gdlr-header-wrapper">
            <div class="gdlr-header-inner">
              <div class="gdlr-header-container container">
                <div style={{margin:"12px 0px 0px 0px"}} class="gdlr-logo">
                  <a href="index.html">
                    {" "}
                    <img style={{height:"4em"}} src="logo.png"/>
                  </a>
                  <div
                    class="gdlr-responsive-navigation dl-menuwrapper"
                    id="gdlr-responsive-navigation"
                  >
                    <button class="dl-trigger">Open Menu</button>
                    <ul
                      id="menu-main-menu"
                      class="dl-menu gdlr-main-mobile-menu"
                    >
                      <li class="menu-item menu-item-home current-menu-item   menu-item-has-children">
                        <Link to="/" aria-current="page">
                          Home
                        </Link>
                      </li>
                      <li class="menu-item menu-item-has-children">
                        <Link to="/about">About us</Link>
                        <ul class="dl-submenu">
                          <li class="menu-item">
                            <a href="accommodation.html">About Institute</a>
                          </li>
                          <li class="menu-item">
                            <a href="AboutPage/about.html">
                              About Universal Innovators
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item menu-item-has-children">
                        <Link to="/sponsorship">Sponsorship</Link>
                      </li>
                      <li class="menu-item">
                        <a href="tickets.html">Registrations</a>
                      </li>
                      <li class="menu-item menu-item-has-children">
                        <Link href="/committee">Committee</Link>
                        <ul class="dl-submenu">
                          <li class="menu-item">
                            <a href="speaker-2-columns-style-1.html">
                              Steering Committee
                            </a>
                          </li>
                          <li class="menu-item">
                            <a href="speaker-3-columns-style-1.html">
                              Technical Program Committee
                            </a>
                          </li>
                          <li class="menu-item">
                            <a href="speaker-4-columns-style-1.html">
                              Advisory Committee
                            </a>
                          </li>
                          <li class="menu-item">
                            <a href="speaker-2-columns-style-2.html">
                              Industry Committee
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="call-for-paper.html">Awards</a>
                      </li>
                      <li class="menu-item menu-item-has-children">
                        <a href="blog-3-columns.html">Downloads</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="gdlr-navigation-wrapper">
                  <nav
                    class="gdlr-navigation"
                    id="gdlr-main-navigation"
                    role="navigation"
                  >
                    <ul id="menu-main-menu-1" class="sf-menu gdlr-main-menu">
                      <li class="menu-item menu-item-home current-menu-item  gdlr-normal-menu">
                        <Link to="/">Home</Link>
                      </li>
                      <li class="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-normal-menu">
                        <Link to="/about">About us</Link>
                        <ul class="sub-menu">
                          <li class="menu-item">
                            <a href="accommodation.html">About Institute</a>
                          </li>
                          <li class="menu-item">
                            <a href="AboutPage/about.html">
                              About Universal Innovators
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-normal-menu">
                        <Link to="sponsorship">Sponsorship</Link>
                      </li>
                      <li class="menu-itemmenu-item gdlr-normal-menu">
                        <a href="tickets.html">Registration</a>
                      </li>
                      <li class="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-normal-menu">
                        <Link to="/committee">Committee</Link>
                        <ul class="sub-menu">
                          <li class="menu-item">
                            <a href="speaker-2-columns-style-1.html">
                              Steering Committee
                            </a>
                          </li>
                          <li class="menu-item">
                            <a href="speaker-3-columns-style-1.html">
                              Technical Program Committee
                            </a>
                          </li>
                          <li class="menu-item">
                            <a href="speaker-4-columns-style-1.html">
                              Advisory Committee
                            </a>
                          </li>
                          <li class="menu-item">
                            <a href="speaker-2-columns-style-2.html">
                              Industry Experts
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-itemmenu-item gdlr-normal-menu">
                        <a href="call-for-paper.html">Awards</a>
                      </li>
                      <li class="menu-item menu-item-has-childrenmenu-item menu-item-has-children gdlr-mega-menu">
                        <a href="blog-3-columns.html">Downloads</a>
                      </li>
                    </ul>
                  </nav>{" "}
                  <span class="gdlr-menu-search-button-sep">|</span>{" "}
                  <i
                    class="fa fa-search icon-search gdlr-menu-search-button"
                    id="gdlr-menu-search-button"
                  ></i>
                  <div class="gdlr-menu-search" id="gdlr-menu-search">
                    <form method="get" id="searchform" action="index.html">
                      <div class="search-text">
                        <input
                          type="text"
                          value="Type Keywords"
                          name="s"
                          autocomplete="off"
                          data-default="Type Keywords"
                        />
                      </div>
                      <input type="submit" value></input>
                      <div class="clear"></div>
                    </form>
                  </div>
                  <div
                    class="gdlr-navigation-gimmick"
                    id="gdlr-navigation-gimmick"
                  ></div>
                  <div class="clear"></div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="clear"></div>
          </header>
       
    )
}

export default Navbar
