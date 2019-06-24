import React, { Component } from 'react';
import { Image ,Panel } from 'react-bootstrap';

import { Link , withRouter} from "react-router-dom";

class createCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          cname: '',
          code:'',
          department:'',
            
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
          cname: this.state.cname,
          code:this.state.code,
          department:this.state.department,
            
            
        }
        e.preventDefault();
        fetch("http://localhost:4000/api/addcrs", {
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
                        localStorage.setItem('courses','yes')
                    }else{
                        localStorage.setItem('courses','no')
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
            code: '',
        })
    }

    resetForm = () => {
        this.setState({
            ...this.state,
            code: ''

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
                                        <h4 className="modal-title">Create Coures</h4>
                                        <div className="box">
                                            {this.alert()}
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.handleSubmit}>
                                            
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="cname" className="form-control" name="cname" placeholder="Coures_Name" value={this.state.cname} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="code" className="form-control" name="code" placeholder="Course_Code" value={this.state.code} onChange={this.handleChange} required="required" />
                                            </div>
                                            <div className="form-group">
                                            <i className="fa fa-user"></i>
                                                <input type="department" className="form-control" name="department" placeholder="Department" value={this.state.instructor} onChange={this.handleChange} required="required" />
                                            </div>
                                            

                                        
                                            <div className="form-group">
                                                <input type="submit" name="login" className="btn btn-primary btn-lg btn-block login-btn" value="Create" />
                                                
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


export default withRouter(createCourse);
