import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RFANavbar from "./components/RFANavbar";
import RFAAffOrgs from "./components/About/RFAAffOrgs";
import RFAHomePage from './components/RFAHomePage';
import RFAFooter from "./components/RFAFooter";
import RFAClassFAQ from "./components/Enroll/RFAClassFAQ";
import RFAVolunteerFAQ from "./components/Volunteer/RFAVolunteerFAQ";
import RFAAbtOverview from "./components/About/RFAAbtOverview";

export default class App extends React.Component{
  render() {
    return (
      <Router>
          <RFANavbar/>
          <Switch>
            <Route exact path = "/" component = {RFAHomePage}/>
            <Route path = "/enroll/classfaq" component = {RFAClassFAQ}/>
            <Route path = "/volunteer/volunteerfaq" component = {RFAVolunteerFAQ}/>
            <Route path = "/about/afforgs" component = {RFAAffOrgs}/>
            {/* <Route path = "/about/overview" component = {RFAAbtOverview}/> */}
          </Switch>
          <br/>
          <br/>
          <br/>
          <RFAFooter/>
      </Router>
    );
  }
}