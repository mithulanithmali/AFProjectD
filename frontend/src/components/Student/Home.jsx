import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ViewExams from './ViewExams';
import EditProfile from './EditProfile';
import DashBoard from './DashBoard'
import FileUpload from './FileUpload';

class Home extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light bg-warning">
						<div className="collpase navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="navbar-item">
									<Link to="/students/" className="nav-link">
										<b>Subjects</b>
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/student/assignments" className="nav-link">
										<b>Assignments</b>
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/students/assignmentUpload" className="nav-link">
										<b>AssignmentUpload</b>
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/students/exams" className="nav-link">
										<b>Exams</b>
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/students/edit-profiles" className="nav-link">
										<b>Edit  your Profile</b>
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<Route path="/students/" exact component={DashBoard} />
				<Route path="/students/assignments" exact component={ViewExams} />
				<Route path="/students/exams" component={ViewExams} />
				<Route path="/students/edit-profiles" component={EditProfile} />
				<Route path="/students/assignmentUpload" component={FileUpload} />
			</Router>
		);
	}
}

export default Home;
