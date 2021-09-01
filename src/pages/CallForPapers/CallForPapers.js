import React from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CallForPapers.css';

const CallForPapers = () => {
  return (
    <>
       <div>
        <Navbar></Navbar>
           <section id="content-section-4">
                  <div
                    className="gdlr-color-wrapper  gdlr-show-all no-skin"
                    style={{
                      backgroundColor: "#f3f3f3",
                      paddingTop: "80px",
                      paddingBottom: "15px",
                    }}
                  >
                    <div style={{height:"25vh"}} className="container">
                      <div className="gdlr-item-title-wrapper gdlr-item pos-left gdlr-nav-container ">
                        <div className="gdlr-item-title-head">
                          <Fade left>
                          <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border gdlr-title-large" style={{textAlign:"center",color:"red"}}>
                           Coming Soon!
                          </h3>
                          </Fade>
                          <div className="clear"></div>
                        </div>
                      </div>
                      </div>
                          <div className="clear"></div>
                          <div className="clear"></div>
                      <div className="clear"></div>
                      </div>
                  <div className="clear"></div>
                </section> 
                         {/* <h1 style={{color:"red"}}>Call For Papers</h1>
      <hr />
      <p>
        The scope of this conference is to provide a platform for researchers,
        engineers, academicians as well as industrial professionals from all
        over the world to present their research results and development
        activities in various topics of Engineering and Technology. It allows
        participants an opportunity to discuss the recent developments in the
        field of solidification computer science and management and review
        challenges faced by the community in the 21st century. The conference
        consists of invited
      </p>
      <hr />
      <h3 style={{margin:"30px"}}>
        ICICC 2022 will be an amalgamation of four different Tracks organized
        parallel to each other, as listed below:
      </h3>
      <hr />
      <ul>
        <h4>Innovative Communication Networks and Security</h4>
        <li>Wireless sensor networks</li>
        <li>Mobile ad-hoc networks</li>
        <li>Software defined networks</li>
        <li>Information theory and coding</li>
        <li>Cloud communications and networking</li>
        <li>Wearable network and systems</li>
        <li>Personal communication systems</li>
        <li>Vehicular networks and applications</li>
        <li>Wireless communications</li>
        <li>Virtual and overlay networks</li>
        <li>Future Internet Architecture and protocols</li>
        <li>Satellite Communication</li>
        <li>Next Generation Networking</li>
        <li>Quantum Networking</li>
        <li>QoS Provisioning and Architectures</li>
        <li>Telecommunication Services and Applications</li>
        Optical Communication
        <li>Network Performance</li>
        <li>Computer Security</li>
        <li>Digital Signature</li>
        <li>Information Security</li>
        <li>Network Security</li>
        <li>Cyber Security</li>
        <li>MANET’s</li>
      </ul>
      <ul>
        <h4>Innovative Computing</h4>
        <li>Computational Intelligence</li>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>Signal Processing</li>
        <li>Computer vision</li>
        <li>Soft Computing</li>
        <li>Decision Support and Decision making</li>
        <li>Parallel computing</li>
        <li>Distributed computing</li>
        <li>Grid computing</li>
        <li>Cloud computing</li>
        <li>Mobile computing</li>
        <li>Biomedical computing</li>
        <li>Ubiquitous computing</li>
        <li>Image processing</li>
        <li>Information retrieval</li>
        <li>Deep learning</li>
        <li>Expert system</li>
        <li>Internet computing</li>
        <li>High performance computing</li>
      </ul>
      <ul>
        <h4>Internet of Things (IoT)</h4>
        <li>Intelligent Systems for IoT</li>
        <li>Environmental Monitoring</li>
        <li>Machine to Machine/Device Communications</li>
        <li>Network Design and Architecture</li>
        <li>Wireless Systems and Applications</li>
        <li>Infrastructure Management</li>
        <li>IoT and Big Data</li>
        <li>Home Automation</li>
        <li>Security and Privacy</li>
        <li>Social Implications of IoT</li>
        <li>Technological focus for Smart Environments</li>
        <li>Smart City Case Studies</li>
        <li>Data Analysis and Visualization</li>
        <li>Architecture for secure and interactive IoT</li>
        <li>Sensor, Wireless Technologies and APIs</li>
        <li>Emerging IoT</li>
      </ul> */}
      <Footer />
      </div>
    </>
  );
};

export default CallForPapers;