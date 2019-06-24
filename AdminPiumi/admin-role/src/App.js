import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Welcome from "./components/welcome.component";
import Instructor from "./components/createInstructor.component";
import CreateAdmin from "./components/createAdmin.component";
import CreateCourses from "./components/createCourse.component";
import AdminLogin from "./components/adminLogin.component";
import Choose from "./components/choose.component";
import showInstructor from "./components/showInstructor";
import showInstructor1 from "./components/showInstructor1";
import showAdmin from "./components/showAdmin";


export default class App extends Component {


    render(){
      return(
        <div>
        <Router>
       
        <nav className ="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Student - Instructor Information System</Link>
       
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/adminLogin" className="nav-link">Admin Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/createAdmin" className="nav-link">Admin SignUp</Link>
        </li>
        <li className="navbar-item">
          <Link to="/#" className="nav-link">LogOut</Link>
        </li>
        
        </ul>
    </nav>
      <Route path="/" exact component={Welcome}/>
       <Route path="/adminLogin" component={AdminLogin}/>
       <Route path="/createAdmin" component={CreateAdmin}/>
       <Route path="/createInstructor" component={Instructor}/>
       <Route path="/createCourse" component={CreateCourses}/>
       <Route path="/choose" component={Choose}/>
       <Route path="/showInstructor" component={showInstructor}/>
       <Route path="/showInstructor1" component={showInstructor1}/>
       <Route path="/showAdmin" component={showAdmin}/>
       </Router>
       
       </div>
      )
    
      }
    }
    


