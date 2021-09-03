import React from "react";
import "./css/master-custom.css"
import "./css/style-custom.css"
import "./css/style-responsive.css"
import "./css/style.css"
import Speaker from "../../components/Speakers/index"; 
import Footer from "../../components/Footer/Footer.js"; 
import Navbar from "../../components/Navbar/Navbar.js"
import Coursel from "../../components/Coursel/Coursel";
import Fade from 'react-reveal/Fade';
import AboutInstitute from "../AboutInstitute/AboutInstitute";

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
           {/* <AboutInstitute></AboutInstitute> */}
               
                

               
                
                <section id="content-section-6">
                  <div
                    className="gdlr-full-size-wrapper gdlr-show-all"
                    style={{ paddingBottom: "0px", backgroundColor: "#ffffff" }}
                  >
                    <div
                      className="gdlr-item gdlr-content-item"
                      style={{ marginBottom: "0px" }}
                    >
                      <div className="wpgmp_map_container wpgmp-map-1" rel="map1"
                      style={{
                           
                            border: "0",
                          }}
                          >
                      <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4670078022446!2d77.4998154150373!3d28.67567358240084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1630515952376!5m2!1sen!2sin"
                       width="600" height="200" 
                       ></iframe>
                        <div
                          style={{
                            position: "absolute",
                            width: "80%",
                            height:"50%",
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
                      backgroundImage: "url(https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/5050/2018/4/26/Campus-View-4.png)",
                      paddingTop: "100px",
                      paddingBottom: "70px",
                      backgroundPosition:"center",
                      backgroundSize:"cover",
                      backgroundRepeat:"none"
                     
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
                        
                          <div className="gdlr-location-info">
                           
                            <span>
                              <i className="fa fa-envelope">icrtdsi@akgec.ac.in</i>
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
                 {/* <Speaker></Speaker>  */}
                {/* <section id="content-section-9">
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
                </section>  */}
             
         
             
                {/* <section id="content-section-11">
                  <div
                    className="gdlr-color-wrapper  gdlr-show-all no-skin"
                    style={{
                      backgroundColor: "#f6f6f6",
                      paddingTop: "90px",
                      paddingBottom: "50px",
                    }}
                  > */}
                    {/* <div className="container">
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
       */}
             
             
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
