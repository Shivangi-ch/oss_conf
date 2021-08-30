import React from 'react'
import {BrowserRouter  , Switch , Route,Redirect} from "react-router-dom" ;  
import HomePage from "./pages/Homepage/Homepage.jsx"
import About from "./pages/AboutPage/About.js"
import Sponsorship from './pages/SponsorshipPage/Sponsorship.js';
import Committee from './pages/CommitteePage/Committee.js';
const App = () => {
  return (
   <>
   <BrowserRouter>
     <Switch>
       <Route path="/" exact component={HomePage}/>
      <Route path="/about" exact component={About}/>
      <Route path="/sponsorship" exact component={Sponsorship}/>
      <Route path="/committee" exact component={Committee}/>
      <Route path="*" render={()=><Redirect to="/" />}/>
     </Switch>
   </BrowserRouter>
   </>
  )
}

export default App
