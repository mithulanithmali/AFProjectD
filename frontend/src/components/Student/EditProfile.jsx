import React,{Component} from 'react';
import axios from 'axios';

export default class EditProfile extends Component{

    constructor(props){
        super(props);
        this.state={
            fName:'',
            lName:'',
            Pwd:'',
            email:'',
            studentID:'',
        };

        this.updateStatus = this.updateStatus.bind(this);
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeStudentID = this.onChangeStudentID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        let id = sessionStorage.getItem('UserID');

        axios.put('http://localhost:4000/Students/'+id).then((res)=>{
            let resData = res.data;
            this.setState({
                Updated:false,
                fName:resData.first_name,
                lName:resData.last_name,
                email:resData.email,
                Pwd:resData.password,
                studentID:resData.studentId

            })
        })
    }

    updateStatus(){
        this.setState({
            Updated:true
        })
    }
    onChangeFName(e){
        this.updateStatus();
        this.setState({
            fName:e.target.value
        })
    }

    onChangeLName(e){
        this.updateStatus();
        this.setState({
            lName:e.target.value
        })
    }

    onChangeEmail(e){
        this.updateStatus();
        this.setState({
            email:e.target.value
        })
    }

    onChangePassword(e){
        this.updateStatus();
        this.setState({
            Pwd:e.target.value
        })
    }

    onChangeStudentID(e){
        this.updateStatus();
        this.setState({
            studentID:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        let id = sessionStorage.getItem('UserID');

        if(this.state.Updated){
            let UpdateStudent = {
                first_name:this.state.fName,
                last_name:this.state.lName,
                email:this.state.email,
                password: this.state.Pwd,
                studentId:this.state.studentID


            };
            axios.put('http://localhost:4000/Students/update/'+id,UpdateStudent).then((res)=>{
                alert(res.data);
            }).catch((err)=>{
                alert('Error'+err);
            })
        }else
            alert('You must make changes to update.');
    }

    render() {
        return (
            <div className="col-sm bg-light text-dark rounded" style={{marginTop:30}}>
                <h3><u><b><i>Edit Profile</i></b></u></h3>

                <div className="container" style={{marginTop:50}}>
                    <form className="form-group" onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">First Name: </label>
                            <input type="text" value={this.state.fName} onChange={this.onChangeFName} placeholder= "Enter First Name" />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">Last Name: </label>
                            <input type="text" value={this.state.lName} onChange={this.onChangeLName} placeholder= "Enter Last Name"/>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">Email: </label>
                            <input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder = "Enter Email" />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">Student ID: </label>
                            <input type="text" value={this.state.StudentID} onChange={this.onChangeStudentID} placeholder = "Enter Student Id" />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">Password: </label>
                            <input type="password" value={this.state.Pwd} onChange={this.onChangePassword} placeholder="XXXXXXX"/>
                        </div>

                        <div className="container">
                            <input type="submit" className="btn btn-primary" value="UPDATE"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}