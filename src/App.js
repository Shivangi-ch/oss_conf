import React from 'react'
import {BrowserRouter  , Switch , Route,Redirect} from "react-router-dom" ;  
import HomePage from "./pages/Homepage/Homepage.jsx"
import About from "./pages/AboutPage/About.js"
import Sponsorship from './pages/SponsorshipPage/Sponsorship.js';
import Committee from './pages/CommitteePage/Committee.js';
import Registration from './pages/RegistrationPage/Registration.js';
import AboutInstitute from "./pages/AboutInstitute/AboutInstitute"
import CallForPaper from "./pages/CallForPapers/CallForPapers"; 
import PaperSubmission from './pages/PaperSubmission/PaperSubmission.js';
import Speakers from "./components/Speakers/index.jsx"; 
const App = () => {
  return (
   <>
   <BrowserRouter>
     <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/about-institute" exact component={AboutInstitute}/>
      <Route path="/about" exact component={About}/>
      <Route path="/sponsorship" exact component={Sponsorship}/>
      <Route path="/committee" exact component={Committee}/>
      <Route path="/Registration" exact component={Registration}/>
      <Route path="/call-for-paper" exact component={CallForPaper}/>
      <Route path="/paper-submission" exact component={PaperSubmission}/>
      <Route path="/speakers" exact component={Speakers}/>
      {/* <Route path="*" component={HomePage}/> */}
      <Route path="/*" render={()=><Redirect to="/" />}/>
     </Switch>
   </BrowserRouter>
   </>
  )
}

export default App
