import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./committee.css";

const Committee = () => {
  return (
    <body>
      <Navbar></Navbar>
      <h2 style={{ textAlign: "center" }}>Steering Committee Members</h2>
      <hr />

      <div className="container" data-aos="fade-left">
        <h1 className="committeelist" data-aos="fade-left" data-aos-delay="200">
          <button className="list-button">Patron</button>
        </h1>

        <div className="row">
         
           
                <h1 style={{marginLeft:"70px"}}>Dr. R.K. Aggarwal , Director General ,AKGEC</h1>
           
        </div>

        <h1 className="committeelist" data-aos="fade-left" data-aos-delay="200">
          <button className="list-button">General Chair</button>
        </h1>

        <div className="row">
         
                <h1 style={{marginLeft:"70px"}}>Dr. Sumita Yadav , HOD-CSE, AKGEC </h1>
             
          
        </div>
        <h1 className="committeelist" data-aos="fade-left" data-aos-delay="200">
          <button className="list-button">Technical Program Chair</button>
        </h1>
        <div className="row">
          <div className="col-5">
            <ul>
              <li>
                <h1> Dr. Mamta Bhusy,AKGEC</h1>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <h1>Dr. Sachin Kumar, AKGEC </h1>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="committeelist" data-aos="fade-left" data-aos-delay="200">
          <button className="list-button"> Convener and Program Chair </button>
        </h1>
        <div className="row">
          <div className="col-5">
            <ul>
              <li>
                <h1>Dr. Sonam Gupta  ,AKGEC</h1>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <ul>
              <li>
                <h1>Dr. Suman Bhatia , AKGEC</h1>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="committeelist" data-aos="fade-left" data-aos-delay="200">
          <button className="list-button">Organizing chair</button>
        </h1>
        <div className="row">
          <div className="col-5">
            <ul>
              <li>
                <h1>Ms.Lipika Goel ,AKGEC </h1>
              </li>
              <li>
                <h1>Mr. Vikas Kamra , AKGEC </h1>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <ul>
              <li>
                <h1>Mr. Jaykant Pratap , AKGEC</h1>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="committeelist">
          <button className="list-button">Track Co-ordinator</button>
        </h1>
        <div className="row">
          <h1>
            <h1  style={{marginLeft:"70px"}}>UPDATED SOON </h1>
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </body>
  );
};

export default Committee;
