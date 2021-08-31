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
    <h1>Patron</h1>


<div className="row">
 <div className="col-sm">
   <ul>
<li className="committeelist" data-aos="fade-left" data-aos-delay="200"><button className="list-button">AKGEC, Dr. RK Aggarwal , DG ,AKGEC</button></li>


</ul>
 </div>
</div>

<h1>General Chair</h1>


         <div className="row">
          <div className="col-sm">
            <ul>
        <li className="committeelist" data-aos="fade-left" data-aos-delay="200"><button className="list-button">AKGEC, Dr Sumita Yadav , HOD-CSE</button></li>
        
       
    </ul>
          </div>
         </div>
<h1>Technical Program Chair</h1>
         <div className="row">
          <div className="col-sm">
            <ul>
        <li className="committeelist" data-aos="fade-left" data-aos-delay="200"><button className="list-button">AKGEC, Dr Mamta</button></li>
        
       
    </ul>
          </div>
          <div className="col-sm">
              <ul>
              <li className="committeelist" data-aos="fade-left" data-aos-delay="300"><button className="list-button">AKGEC , Dr Sachin</button></li>
           
        </ul>
          </div>
         
         </div>

<h1>Convener and Program Chair</h1>
         <div className="row">
          <div className="col-sm">
            <ul>
        <li className="committeelist" data-aos="fade-left" data-aos-delay="200"><button className="list-button">AKGEC, Dr. Sonam Gupta</button></li>
        
       
    </ul>
          </div>
          <div className="col-sm">
              <ul>
              <li className="committeelist" data-aos="fade-left" data-aos-delay="300"><button className="list-button">AKGEC , Dr. Suman Bhatia</button></li>
           
        </ul>
          </div>
         
         </div>

<h1>Organizing chair</h1>
         <div className="row">
          <div className="col-sm">
            <ul>
        <li className="committeelist" data-aos="fade-left" data-aos-delay="200"><button className="list-button">AKGEC, Ms.Lipika Goel </button></li>
        <li className="committeelist" data-aos="fade-left" data-aos-delay="300"><button className="list-button">AKGEC ,Mr. Vikas Kamra </button></li>
        
       
    </ul>
          </div>
          <div className="col-sm">
              <ul>
              <li className="committeelist" data-aos="fade-left" data-aos-delay="300"><button className="list-button">AKGEC , Mr. Jaykant Pratap</button></li>
           
        </ul>
          </div>
         
         </div>

         <h1>Track Co-ordinator</h1>
         <div className="row">
       
        <h1 style={{width:"100%"}} data-aos="fade-left" data-aos-delay="200"><button className="list-button">UPDATED SOON </button></h1>

          
         
         </div>


      </div> 
    <Footer></Footer>
</body>
    )
}

export default Committee







