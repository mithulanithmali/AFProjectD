import React, { Component } from 'react';
import { Image ,Panel } from 'react-bootstrap';

import { Link , withRouter} from "react-router-dom";

class createInstructor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            pwd: '',
            tp:'',
            nic:'',
            department: '',
            crs1: '',
            crs2: '',
            crs3: '',
            data: '',
            showalert: false,
            default: true,
            signInError: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value
        let name = target.name;

        this.setState({
            [name]: value,
            showalert: false
        });
    }

    handleSubmit(e) {
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email:this.state.email,
            nic:this.state.nic,
            tp:this.state.tp,
            pwd: this.state.pwd,
            department: this.state.department,
            crs1: this.state.crs1,
            crs2: this.state.crs2,
            crs3: this.state.crs3
        }
        
            e.preventDefault();
            if (!this.state.pwd && !this.state.pwd) {
                console.log(this.state.pwd)
                const user = {
                    email:this.state.email    
                }
                fetch("http://localhost:4000/api/email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(json => {
                        if (json.success) {
                            this.setState({
                                successmsg: true,
                            })
                            this.success();
                            this.resetForm();
                        } else {
                            if (!json.success) {
                                this.alert();
                                this.setState({
                                    backmsg:json.msg,
                                    res:true
                                })
                            }
                        }
                    })
            }
        e.preventDefault();
        fetch("http://localhost:4000/api/addins", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.success) {
                    sessionStorage.setItem('firstname', json.firstname);
                    localStorage.setItem('lastname',json.lastname);
                    localStorage.setItem('id',json.id)
                    if(json.admin){
                        localStorage.setItem('instructor','yes')
                    }else{
                        localStorage.setItem('instructor','no')
                    }
                    
                    this.setState({
                        signInError: json.success,
                        
                    })
                    this.props.history.push('/choose');
                } else {
                    this.setState({
                        signInError: json.msg,
                        default: false,
                        showalert: true
                    })
                     
                }
            })

    }
    alert() {
        if (this.state.showalert) {
            return (
                <div>
                 <Panel bsStyle="danger contain">
                 <Panel.Heading>
                   <Panel.Title componentClass="h3">{this.state.signInError}</Panel.Title>
                 </Panel.Heading>
               </Panel>
                </div>
            )
        }
    }
    resetForm1 = () => {
        this.setState({
            ...this.state,
            pwd: '',
        })
    }

    resetForm = () => {
        this.setState({
            ...this.state,
            email: '',
            pwd: '',
            firstname: '',
            lastname: '',
            tp:'',
            nic:'',
            data: '',
            department:'',
            crs1: '',
            crs2: '',
            crs3: '',

        })
    }

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
                                        <div className="avata">
                                           
                                        </div>
                                        <h4 className="modal-title">Sign In for Instructors</h4>
                                        <div className="box">
                                            {this.alert()}
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="firstname" className="form-control" name="firstname" placeholder="Firstname" value={this.state.firstname} onChange={this.handleChange} required="required" />
                                            </div>

                                           
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="lastname" className="form-control" name="lastname" placeholder="Lastname" value={this.state.lastname} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="pwd" className="form-control" name="pwd" placeholder="Password" value={this.state.pwd} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="nic" className="form-control" name="nic" placeholder="NIC" value={this.state.nic} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="tp" className="form-control" name="tp" placeholder="Telephone" value={this.state.tp} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="department" className="form-control" name="department" placeholder="Department" value={this.state.department} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="crs1" className="form-control" name="crs1" placeholder="Coures1" value={this.state.crs1} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="crs2" className="form-control" name="crs2" placeholder="Coures2" value={this.state.crs2} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="crs3" className="form-control" name="crs3" placeholder="Coures3" value={this.state.crs3} onChange={this.handleChange} />
                                            </div>

                                        
                                            <div className="form-group">
                                                <input type="submit" name="login" className="btn btn-primary btn-lg btn-block login-btn" value="SignIn" />
                                                
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




export default withRouter(createInstructor);
