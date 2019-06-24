import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import AssignmentEnter from './AssignmentEnter.js';
import AssignmentView from './AssignmentView.js'
import AssignmentEdit from './AssignmentEdit.js';
import AddCourse from './AddCourse.js';



 class App extends Component{
  
  constructor(props){
    super(props);

    }

render(){
  return(
    <div>
    <Router>
   
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
     
    <Link to="/" className="navbar-brand">Student - Instructor System</Link>
   
    <ul className="navbar-nav mr-auto">
    <li className="navbar-item">
      <Link to="/" className="nav-link">AssignmentEnter</Link>
    </li>

    <li className="navbar-item">
      <Link to="/viewAssignment" className="nav-link">Assignment Details</Link>
    </li>

    <li className="navbar-item">
      <Link to="/addCourse" className="nav-link">Add Course</Link>
    </li>
    
    
    </ul>
</nav>

   <Route path="/" exact component={AssignmentEnter}/>
   <Route path="/viewAssignment" component={AssignmentView}/>
   <Route path="/edit/:id" component={AssignmentEdit}/>
   <Route path='/addCourse' component={AddCourse}/>
   
   </Router>
   
   </div>
  )

  }
}
export default App;