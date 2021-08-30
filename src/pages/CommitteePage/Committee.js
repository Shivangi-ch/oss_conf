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

   
    <div  class="container" data-aos="fade-left">
    <h1>Patron(s):</h1>
        <div class="row">
          <div class="col-sm">
            <ul>
        <li data-aos="fade-left" data-aos-delay="200"><button class="list-button">shopping</button></li>
        <li data-aos="fade-left" data-aos-delay="300"><button class="list-button">technolgy</button></li>
       
    </ul>
          </div>
          <div class="col-sm">
              <ul>
            <li data-aos="fade-left" data-aos-delay="100"><button class= "list-button">lifestyle</button></li>
            <li data-aos="fade-left" data-aos-delay="200"><button class="list-button">shopping</button></li>
           
        </ul>
          </div>
         
         </div>

<h1>software</h1>


         <div class="row">
          <div class="col-sm">
            <ul>
        <li data-aos="fade-left" data-aos-delay="200"><button class="list-button">shopping</button></li>
        <li data-aos="fade-left" data-aos-delay="300"><button class="list-button">technolgy</button></li>
       
    </ul>
          </div>
          <div class="col-sm">
              <ul>
            <li data-aos="fade-left" data-aos-delay="100"><button class= "list-button">lifestyle</button></li>
            <li data-aos="fade-left" data-aos-delay="200"><button class="list-button">shopping</button></li>
           
        </ul>
          </div>
         
         </div>



      </div> 
    <Footer></Footer>
</body>
    )
}

export default Committee







