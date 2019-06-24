import React, { Component } from 'react';
import { Image ,Panel } from 'react-bootstrap';

import { Link , withRouter} from "react-router-dom";

class choose extends Component {



        render() {
            return (
                <div className="back">
                    <div id="about" className="container-fluid">
                        <div className="row">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-8 slideanim">
                                <div className="modal-dialog modal-login">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            
                                            <h4 className="modal-title">Choose Options</h4>
                                            
                                        </div>
                                        <div className="modal-body">
                                            <form >
                                                
                                            <div className="form-group">
                                            <Link to={"/createInstructor"}> <input type="submit" name="login" className="btn btn-primary btn-lg btn-block login-btn" value="Create Instructor" />
                                                    </Link>
                                                    
                                                </div>
                                                <div className="form-group">
                                                <Link to={"/createCourse"}><input type="submit" name="login" className="btn btn-primary btn-lg btn-block login-btn" value="Create Courses" />
                                                </Link>
                                                </div>
                                                <div className="form-group">
                                                <Link to={"/showInstructor"}> <input type="submit" name="login" className="btn btn-primary btn-lg btn-block login-btn" value="View Courses" />
                                                </Link> 
                                                </div>
                                                <div className="form-group">
                                                <Link to={"/showInstructor1"}> <input type="submit" name="login" className="btn btn-primary btn-lg btn-block login-btn" value="View Instructors" />
                                                </Link> 
                                                </div>
                                                <div className="form-group">
                                                <Link to={"/showAdmin"}> <input type="submit" name="login" className="btn btn-primary btn-lg btn-block login-btn" value="View Admins" />
                                                </Link> 
                                                </div>
                                                 
                                                
                                                
                                            </form>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
            );
    




}
}
export default withRouter(choose);