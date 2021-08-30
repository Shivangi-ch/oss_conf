import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./committee.css"

const Committee = () => {
 
    return (
        <body>
           <Navbar></Navbar>
    <h2 style={{textAlign:"center"}}>Steering Committee Members</h2>
    <hr/>

   
    <div  className="container" data-aos="fade-left">
    <h1>Patron(s):</h1>
        <div className="row">
          <div className="col-sm">
            <ul>
        <li data-aos="fade-left" data-aos-delay="200"><button className="list-button">shopping</button></li>
        <li data-aos="fade-left" data-aos-delay="300"><button className="list-button">technolgy</button></li>
       
    </ul>
          </div>
          <div className="col-sm">
              <ul>
            <li data-aos="fade-left" data-aos-delay="100"><button className= "list-button">lifestyle</button></li>
            <li data-aos="fade-left" data-aos-delay="200"><button className="list-button">shopping</button></li>
           
        </ul>
          </div>
         
         </div>

<h1>software</h1>


         <div className="row">
          <div className="col-sm">
            <ul>
        <li data-aos="fade-left" data-aos-delay="200"><button className="list-button">shopping</button></li>
        <li data-aos="fade-left" data-aos-delay="300"><button className="list-button">technolgy</button></li>
       
    </ul>
          </div>
          <div className="col-sm">
              <ul>
            <li data-aos="fade-left" data-aos-delay="100"><button className= "list-button">lifestyle</button></li>
            <li data-aos="fade-left" data-aos-delay="200"><button className="list-button">shopping</button></li>
           
        </ul>
          </div>
         
         </div>



      </div> 
    <Footer></Footer>
</body>
    )
}

export default Committee







