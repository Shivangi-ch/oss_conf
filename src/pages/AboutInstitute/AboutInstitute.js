import React from 'react';
import "./AboutInstitute.css";
import $ from "jquery"

import Footer from '../../components/Footer/Footer';
const AboutInstitute = () => {
    return (
        <body>
       
    <div className="wrapper-about">
        <h1 className="institute">About the Institute</h1>
        <h3 className="institute-about">SCALING THE ZENITH OF EXCELLENCE</h3>
        <div className="information-about">
            <p>Driven by its commitment to provide quality technical education, Ajay Kumar Garg Engineering College has
                become the best Engineering institution in Uttar Pradesh.</p>

            <p> Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J. Abdul Kalam Technical
                University, Lucknow, and is approved by the All India Council for Technical Education. The college was
                established in 1998 and offers B.Tech courses in nine disciplines of Engineering namely Computer Science
                and
                Engineering, Information Technology, Computer Science, Computer Science & Information Technology,
                Computer
                Science and Engineering (Artificial Intelligence & Machine Learning), Computer Science and Engineering
                (Data
                Science), Computer Science and Engineering (Hindi), Artificial Intelligence & Machine Learning,
                Electronics
                and Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Civil
                Engineering. At the post graduate level, the College offers M.Tech in Electronics & Communication
                Engineering,
                Computer Science, Electrical and Electronics Engineering and Mechanical Engineering and the Master of
                Computer Applications course.
            </p>
            
            <div className="important-info1">
                <div className="line"></div>
                <p>
                    Spread over 40 acre campus, AKGEC has excellent infrastructure with well-planned complexes for each
                    department having spacious laboratories, class rooms equipped with state-of-the-art teaching aids,
                    department libraries and faculty cabins. Departmental laboratories have the latest equipment and
                    relevant licensed software. The college has state-of-the-art computing facilities with over 1400
                    computers networked through broadband for Internet access. The college has a fully automated central
                    library with over 1,00,000 books, national/international journals including e-journals and
                    multimedia resources.
                </p>
            </div>
            <p>Wi-Fi enabled campus includes faculty residences and three boys and three girls hostels accommodating
                over 1500 students. Hostels have a library, TV room, canteen, general store, well equipped gymnasium as
                well as indoor and outdoor sports facilities.</p>
            
            <p>The college places special emphasis on collaboration with industries at various levels to groom the
                students to meet the industry standards. These include establishing collaborative facilities for student
                training in emerging multi disciplinary technologies and undertaking industry sponsored consultancy
                projects.
            </p>
            
            <div className="important-info2">
                <div className="line"></div>
                <p>
                    The College has established the first NI LabVIEW Academy in the state of U.P. in collaboration with National Instruments. The Academy is equipped with Laboratory Virtual Instrumentation Engineering Workband (LabVIEW) with built in functionality for simulation, data acquisition, instrument control, measurement analysis, data presentation and state-of-the-art Education Laboratory Virtual Instrumentation Suite (ELVIS) for training on concepts of Sensorics, Mechatronics and Controls. The Academy offers courses which provide opportunity to obtain three-part NI LabVIEW certification, namely CLAD, CLD & CLA, that imparts broad working knowledge of the LabVIEW environment. Till now Labview Academy has conducted more than 36 training courses and trained nearly 600+ engineers. The Academy has also achieved international recognized 215 CLAD Certification (out of 1900 in the country) and 18 CLD certifications (out of 241 in the country). To recognize the spectacular outcomes consistently since last three years, the academy has been selected as “Best LabVIEW Academy in India” amongest 93 academies in India. This award was given during ‘NI days 2016” conference held on 19th October, 2016 at Bangalore.
                </p>
            </div>
            <p>The College has also set up the first Centre of Competence in Automation Technologies in North India in collaboration with BOSCH Rexroth AG, Germany. The centre aims to train young engineering graduates of all disciplines to meet industry expectations and foster research in the multidisciplinary field of automation technologies. This centre has six laboratories equipped with state-of-the-art equipment to teach and train students and professionals in Industrial Hydraulics, Pneumatics, Sensorics, Drives & Control, CNC, PLCs and Mechatronics at par with international standards.</p>
            <p>The PLM Centre of Excellence set up in association with SIEMENS aims to develop engineering professionals equipped with next generation technologies. The centre provides education to the next generation of designers/engineers on software including SOLIDEDGE, NX and CAD/CAM/CAE for digital product engineering, Team Centre for product life cycle management and Technomatix for digital manufacturing. It addresses diverse industry segments like automotive, industrial machinery, industrial automation, aerospace and shipbuilding.
            </p>
            <p>To promote Industry oriented teaching learning, AKGEC has setup Centre for Integrated Automation in association with Automation Industry Association (AIA). This initiative of AIA is intended to share global quality learning processes from its vast pool of member companies with chosen Engineering Colleges of our country. Industry partners namely Siemens, Pepperel + Fuchs, Festo and B&R have taken the lead among all industry members of AIA to support the initiative. Main objective of this Centre is to encourage engineering students to take up this multidisciplinary field as a choice of their career and get hands-on experience with latest state-of-the-art integrated automation technologies as per industry expectations.
            </p>
            
            <p>The efforts of the college to bridge the gap between academic curriculum and industry requirements through these centers of Excellence & Competence have been recognized and the college is the recipient of the CMAI Best Industry Interface award from the Hon’ble Minister of Science & Technology, UP Govt.</p>
            <p>AKGEC in its endeavor to promote technical competency of engineering graduates, Diploma and ITI candidates has established Skill Development Centre in collaboration with National Skill Development Corporation (NSDC), Ministry of Skill Development & Entrepreneurship, Govt. of India under AKGEC Skills Foundation. This initiative is supported by reputed multinational industries of Europe like SIEMENS, Fronius, Messer and Carl Zeiss as per the International didactic concepts. This centre has world class State-of-the-art infrastructure and facilities to train young Engineers, Polytechnic and ITI candidates in the field of Conventional and Computer Aided Manufacturing, Robot Assisted Manufacturing, Robotic Manufacturing, Manual & Robotic Arc Welding, Non-Destructive Testing (NDT) and High-End Reverse Engineering processes.</p>
            <p>In addition, the College has established the Big Data Centre of Excellence, Software Development Centre and Open Source Software Research & Development lab. These centers are run and managed entirely by the students to promote software development for the college as well as external clients, conduct training programs in various technologies and host competitions.
            </p>
            <p>As a result of these initiatives, the college has been having excellent campus placements. During the current academic year, over 800 students have been placed in PSUs and reputed organizations like Infosys, HCL Technologies, L&T, L&T Infotech, Hyundai, Wipro Technologies, Jakson Engineers Ltd., NTPC, IBM, Indian Air Force and the Indian Army.</p>
            <p>The main distinguishing features of the college have been uniform transparent policies and systems as well as uncompromising honesty in every facet of its activities. The college believes in setting audacious goals and infusing fresh ideas to achieve them.</p>
        </div>
    </div>
    <div className="highlight">
        <div className="highlight-container">
            <h3 className="topic">Highlights</h3>
            <div className="milestone" id="milestone-card1" onClick={()=>{
        $("#card1").slideToggle(800);
        $("#card1").css("display","flex")
        $("#card2").hide();
        $("#card3").hide();
            }}>
                <div className="milestone-item1">Milestones</div>
                <div className="milestone-item2" id="card1">
                    <ul className="left-ul">
                        <li>Recipient of Academic Excellence Trophy for “Best Engineering College in UPTU" for two successive years from H.E., The Governor of U.P.</li>
                        <li>The only Institution in U.P. to have received approval from DST, Govt. of India, for establishment of Centre of Relevance and Excellence (CORE) in the field of Industrial Automation & Robotics</li>
                        <li>Skill Development Centre established in partnership with National Skill Development Corporation (NSDC)</li>
                        <li>Best LabVlEW Academy in India Award by National Instrument</li>
                        <li>Best Robolab Setup Award 2020 by All India Council for Robotics & Automation (AICRA)</li>
                        <li>Excellence and Innovation in the Robotics Education Award 2019 by All India Council for Robotics & Automation (AICRA)</li>
                    </ul>
                    <ul className="right-ul">
                        <li>Best Technology Infrastructure of the Year Award 2018 by All India Council for Robotics and Automation</li>
                        <li>Best Vocational Robotics Education Award 2018 by All India Council for Robotics and Automation</li>
                        <li>Skill Development Centre established in partnership with National Skill Development Corporation (NSDC)</li>
                        <li>Best Industry Institute Interaction Award – 2018 by NAFEMS</li>
                        <li>Accreditation of Measurement and Metrology Centre by National Accreditation Board for Testing and Calibration Laboratories (NABL)</li>
                        <li>Best Private Engineering College in North India Award – 2018 during 4th Dialogue India Academia Conclave</li>
                    </ul>
                </div>
            </div>
            <div className="milestone" id="milestone-card2"  onClick={()=>{
  $("#card2").slideToggle(800);
       $("#card2").css("display","flex")
       $("#card1").hide();
       $("#card3").hide();
            }} >  
            <div className="milestone-item1">Innovative Projects by students</div>
            <div className="milestone-item2" id="card2">  <ul className="left-ul">
                <li>Student Project “Waste Segregation Model" declared Winner of AKTU State Technical, Literary & Management Fest 2019-20.</li>
                <li>Student Project “Automated Inventory Management System" declared Winner of Mitsubishi Electric Gold Cup 2017</li>
                <li>Skill Development Centre established in partnership with National Skill Development Corporation (NSDC)</li>
                <li>Student Project “Win Switch" awarded amongst best three projects by “US-India Startup Forum" along with other two projects from alumni of llT Kanpur & IIM Ahmedabad</li>
                <li>Best Student Project Award by Fluid Power Society of India at IISc, Bangalore</li>
            </ul>
            <ul className="right-ul">
                <li>Winner of Inspiration Award in Smart India Hackathon organized by Ministry of HRD & AICTE</li>
                <li>Five students awarded as “University Innovation Fellows" by H.P. Institute of Design, Stanford University, USA</li>
                <li>Student Project “Smart Agriculturist Support System" awarded second prize in NIYANTRA-2017</li>
                <li>Runner-up Gradibility Award in Efficycle-2017 event</li>
            </ul></div>
           </div>
            <div className="milestone" id="milestone-card3"  onClick={()=>{
        $("#card3").slideToggle(800);
       $("#card3").css("display","flex")
       $("#card2").hide();
       $("#card1").hide();
            }}>
                <div className="milestone-item1">Unmatched and unbeatable records by students</div>
                <div className="milestone-item2" id="card3">  <ul className="left-ul">
                    <li>AKTU Chancellor’s Medal for securing maximum marks across the branches bagged by AKGEC students for five consecutive years 2015-16, 2016-17, 2017-18, 2018-19 and 2019-20.</li>
                    <li>Excellent performance in GATE 2020 with Amulya Agrawal securing 422 All India Rank</li>
                    <li>Excellent performance in CAT 2019 with Dipank Agarwal and Srishti Singh securing 90.05 and 89.36 percentile respectively</li>
                    <li>Students selected in IITs, IISc Bangalore, NITs, IIMs, IMT, XLRI and many other eminent institutions</li>
                   </ul>
                <ul className="right-ul">
                    <li>More than 800 placements in good companies like Infosys, Wipro, TCS, IBM India, Amazon, Capgemini, Cognizant, HCL, HSBC Software Development (India) Pvt. Ltd., BYJU’S, Ceasefire Industries, DLT Labs, DXC Technology, Extramarks, Global Logic, Jaro Education, Josh Technology, Lohia Corp Limited (Lohia Group), MAQ Software, Motherson Sumi Infotech & Design Systems, Nagarro, NEC Technologies, Newgen Software, NIIT Technologies, OPPO Mobiles India, Torrent Power, Vedantu Innovations and many more</li>
                    <li>215 students of AKGEC amongst 1900 CLAD certified and 18 students amongst 241 CLD certified professionals in the whole country</li>
                </ul></div>  
            </div>
        </div>
    </div>
   
    </body>
    )
}

export default AboutInstitute
