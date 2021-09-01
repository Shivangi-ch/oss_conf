import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
       
        <div>
            <Navbar></Navbar>
                <div className="gdlr-subscribe-item gdlr-item">
                      <Fade right>
                        <h4
                          className="gdlr-subscribe-title"
                          style={{ color: "red" }}
                        >
                          About Conference
                        </h4>
                        </Fade>
                        <div className="gdlr-newsletter-subscribe">
                          <div className="newsletter newsletter-subscription">
                            <Fade left>
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
                            </Fade>
                          </div>
                        </div>
                      </div>
                <Footer></Footer>
                </div>
     
    )
}

export default About
