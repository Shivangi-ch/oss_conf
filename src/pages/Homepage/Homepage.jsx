import React from "react";
import "./css/master-custom.css"
import "./css/style-custom.css"
import "./css/style-responsive.css"
import "./css/style.css"
import Speaker from "../../components/Speakers/index"; 
import Footer from "../../components/Footer/Footer.js"; 
import Navbar from "../../components/Navbar/Navbar.js"
import Coursel from "../../components/Coursel/Coursel";

const Homepage = () => {
 
  return (
    <>
      <body style={{scrolling:"no"}}
        data-rsssl="1"
        className="home page-template-default page page-id-3304 _masterslider _msp_version_3.2.7"
      >
        <div className="body-wrapper  float-menu" data-home="index.html">
          <Navbar></Navbar>
          <div id="gdlr-header-substitute"></div>
          <div className="content-wrapper">
            <div className="gdlr-content">
              <div className="with-sidebar-wrapper gdlr-type-no-sidebar">
           <Coursel></Coursel>

                <section id="content-section-3">
                  <div
                    className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-gray-skin"
                    id="gdlr-parallax-wrapper-1"
                    data-bgspeed="0.1"
                    style={{
                      backgroundColor: "white",
                      paddingTop: "100px",
                      paddingBottom: "70px",
                    }}
                  >
                    <div className="container">
                      <div className="clear"></div>
                      <div className="gdlr-subscribe-item gdlr-item">
                        <h4
                          className="gdlr-subscribe-title"
                          style={{ color: "red" }}
                        >
                          About Conference
                        </h4>
                        <div className="gdlr-newsletter-subscribe">
                          <div className="newsletter newsletter-subscription">
                            <p style={{color:"#000", fontSize: "15px"}}>
                              International Conference on Innovative Computing
                              and Communication (ICICC 2022) is organised with
                              the objective of bringing together innovative
                              scientists, professors, research scholars,
                              students and industrial experts in the field of
                              Computing and Communication to a common forum. The
                              primary goal of the conference is to promote the
                              exchange of innovative scientific information
                              between researchers, developers, engineers,
                              students, and practitioners. Another goal is to
                              promote the transformation of fundamental research
                              into institutional and industrialized research and
                              to convert applied exploration into real time
                              application. Overall the conference will provide
                              the researchers and attendees with prospects for
                              national and international collaboration and
                              networking among universities and institutions
                              from India and abroad for promoting research.
                              ICICC- 2022 will be held at Shaheed Sukhdev
                              College of Business Studies, University of Delhi,
                              New Delhi in association with National Institute
                              of Technology, Patna All the accepted papers
                              (after double blinded peer review) are published
                              in Springer(Approval Pending) AISC series and
                              extended selected papers will be published in the
                              special issues of SCI/SCOPUS/WoS/DBLP/ACM indexed
                              Journals.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </section>
                

                <section id="content-section-6">
                  <div
                    className="gdlr-full-size-wrapper gdlr-show-all"
                    style={{ paddingBottom: "0px", backgroundColor: "#ffffff" }}
                  >
                    <div
                      className="gdlr-item gdlr-content-item"
                      style={{ marginBottom: "0px" }}
                    >
                      <div className="wpgmp_map_container wpgmp-map-1" rel="map1">
                        <iframe
                          style={{
                            width: "100%",
                            height: "450px",
                            border: "0",
                          }}
                          title="google api"
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19905.696399556287!2d-0.3007084089960577!3d51.417531259591925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2334+Peterson+Street+Kingston+UK+London+H14D!5e0!3m2!1sen!2s!4v1546697086219"
                          width="600"
                          height="450"
                          scrolling="no"
                        ></iframe>
                        <div
                          style={{
                            position: "absolute",
                            width: "80%",
                            bottom: "20px",
                            left: 0,
                            right: 0,
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "#000",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>
                </section>
                <section id="content-section-7">
                  <div
                    className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-dark-skin"
                    id="gdlr-parallax-wrapper-2"
                    data-bgspeed="0.2"
                    style={{
                      backgroundImage: "url('upload/location-bg.jpg')",
                      paddingTop: "100px",
                      paddingBottom: "70px",
                    }}
                  >
                    <div className="container">
                      <div
                        className="gdlr-title-item"
                        style={{ marginBottom: "40px" }}
                      >
                        <div className="gdlr-item-title-wrapper gdlr-item pos-center ">
                          <div className="gdlr-item-title-head">
                            <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border gdlr-title-large">
                              Location
                            </h3>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                      <div className="gdlr-item gdlr-content-item">
                        <div className="gdlr-location-item">
                          <div className="gdlr-location-title">
                            Administrative Block, Conference Room
                          </div>
                          <div className="gdlr-location-place">
                            "<i className="fa fa-location-arrow"></i>27th Km Stone,
                            Delhi-Hapur Bypass Road, P.O. Adhyatmik Nagar,
                            Ghaziabad - 201009
                          </div>
                          <div className="gdlr-location-content">
                            <a href="accommodation.html">
                              Check For Accommodations Here
                            </a>
                          </div>
                          <div className="gdlr-location-info">
                            <span>
                              <i className="fa fa-phone"></i>8744052891-94
                            </span>
                            <span>
                              <i className="fa fa-envelope"></i>info@akgec.ac.in
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </section>
                <Speaker></Speaker>
                <section id="content-section-9">
                  <div
                    className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-dark-skin"
                    id="gdlr-parallax-wrapper-3"
                    data-bgspeed="0"
                    style={{
                      backgroundImage: "url('upload/ticket-bg.jpg')",
                      paddingTop: "100px",
                      paddingBottom: "65px",
                      // height:"285px"
                    }}
                  >
                  <div className="container">
                    <div className="gdlr-item-title-wrapper gdlr-item pos-center ">
                      <div className="gdlr-item-title-head">
                        <h3 style={{color:"white"}} className="gdlr-item-title gdlr-skin-title gdlr-skin-border gdlr-title-large">
                          Suppoted by
                        </h3>
                        <div className="clear"></div>
                      </div>
                    </div>
                    <div className="ticket-item-wrapper">
                      <div className="ticket-item-holder">
                        <div className="clear"></div>
                        <div className="four columns">
                          <div className="gdlr-item gdlr-ticket-item">
                            <img
                              src="https://universal-inovators.com/static/media/thinklogo.7736c151.jpeg"
                              alt=""
                              width={620}
                              height={620}
                              style={{ marginTop: "100px" }}
                            />{" "}
                          </div>
                        </div>
                        <div className="four columns">
                          <div className="gdlr-item gdlr-ticket-item">
                            <img
                              src="https://universal-inovators.com/static/media/setitlogo.f7cb305d.png"
                              alt=""
                              width="620"
                              height="620"
                              style={{ marginTop: "100px" }}
                            />
                          </div>
                        </div>
                        <div className="four columns">
                          <div className="gdlr-item gdlr-ticket-item">
                            <img
                              src="http://www.icicc-conf.com/sponsors/img4.jpg"
                              width="520"
                              alt=""
                              height="620"
                              style={{ marginTop: "80px" }}
                            />
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                      </div>
                      <div className="clear"></div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </section>

             
         
             
                <section id="content-section-11">
                  <div
                    className="gdlr-color-wrapper  gdlr-show-all no-skin"
                    style={{
                      backgroundColor: "#f6f6f6",
                      paddingTop: "90px",
                      paddingBottom: "50px",
                    }}
                  >
                    <div className="container">
                      <div
                        className="gdlr-title-item"
                        style={{ marginBottom: "55px" }}
                      >
                        <div className="gdlr-item-title-wrapper gdlr-item pos-center ">
                          <div className="gdlr-item-title-head">
                            <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border gdlr-title-large">
                              Sponsors
                            </h3>
                            <div className="clear"></div>
                          </div>
                          <div className="gdlr-item-title-caption gdlr-skin-info">
                            Maecenas faucibus mollis interdum. Nullam id dolor
                            
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                      <div className="gdlr-banner-item-wrapper">
                        <div className="gdlr-banner-images gdlr-item">
                          <div
                            className="flexslider"
                            data-pausetime="7000"
                            data-slidespeed="600"
                            data-effect="fade"
                            data-columns="6"
                            data-type="carousel"
                            data-nav-container="gdlr-banner-images"
                          >
                            <ul className="slides">
                              <li>
                                <a
                                  href=""
                                  data-rel="fancybox"
                                  
                                >
                                  <img
                                    src="upload/banner-1.jpg"
                                    alt=""
                                    width="152"
                                    height="152"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  data-rel="fancybox"
                                 
                                >
                                  <img
                                    src="upload/banner-2.jpg"
                                    alt=""
                                    width="152"
                                    height="152"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  data-rel="fancybox"
                                  
                                >
                                  <img
                                    src="upload/banner-3.jpg"
                                    alt=""
                                    width="152"
                                    height="152"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  data-rel="fancybox"
                                  
                                >
                                  <img
                                    src="upload/banner-4.jpg"
                                    alt=""
                                    width="152"
                                    height="152"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  data-rel="fancybox"
                                  
                                >
                                  <img
                                    src="upload/banner-5.jpg"
                                    alt=""
                                    width="152"
                                    height="152"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  data-rel="fancybox"
                                  
                                >
                                  <img
                                    src="upload/banner-6.jpg"
                                    alt=""
                                    width="152"
                                    height="152"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </section>
      
             
             
              </div>
            </div>
            <div className="clear"></div>
          </div>
         <Footer></Footer>
        </div>
      </body>
    </>
  );
};

export default Homepage;
