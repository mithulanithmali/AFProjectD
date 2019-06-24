import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import LoginOthersComp from "./Student.login.component/StudentLogin";
import RegisterStudent from "./Student.Register.component/RegisterStudent";

import Home from '../Student/Home';
import AboutUs from '../Student/AboutUs'

export default class HomeHandler extends Component{
    constructor(props){
        super(props);

        this.buttonClickLogout = this.buttonClickLogout.bind(this);
        this.openUserPortal = this.openUserPortal.bind(this);
    }

    openUserPortal(){
        if(sessionStorage.getItem('UserType')){
            let Type = sessionStorage.getItem('UserType');

            if(Type === 'Instructor'){
                window.open("/Instructor/","_self");
            }else if(Type === 'Student'){
                window.open("/Student/","_self");
            }
        }else{
            alert('Welcome, to have more access you should login.');
            window.open("/login","_self");
        }
    }

    buttonClickLogout(){
        sessionStorage.clear();
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.removeItem('token');
        window.open("/login","_self");
    }

    componentDidMount() {
        console.log(sessionStorage);
        let LoginStatDiv = document.getElementById('LoginStat');
        if(!sessionStorage.getItem('UserID')){
            let LoginListItem =  document.createElement('li');
            let LoginText = document.createTextNode('Login');
            let LinkTag = document.createElement('a');
            LoginListItem.setAttribute('class','navbar-item');
            LinkTag.setAttribute('href','/login');
            LinkTag.setAttribute('class','nav-link');
            LinkTag.appendChild(LoginText);

          
        }else{
            let UserName = sessionStorage.getItem('UserName');
            let SubStrings = UserName.split(' ');
            let name = SubStrings[0];

            let ListItem =  document.createElement('li');
            let ListItemBtn =  document.createElement('li');
            ListItem.setAttribute('class','nav-link');
            let ParagraphTag = document.createElement('p');
            let WelcomeText = document.createTextNode(' You are Loging as '+name);
            ParagraphTag.appendChild(WelcomeText);

            ListItemBtn.setAttribute('class','nav-link');
            let LogoutBtn = document.createElement('input');
            LogoutBtn.setAttribute('class','btn btn-outline-light');
            LogoutBtn.setAttribute('type','button');
            LogoutBtn.onclick = ()=>{this.buttonClickLogout()};
            LogoutBtn.setAttribute('value','LOGOUT');
            ListItem.appendChild(ParagraphTag);
            ListItemBtn.appendChild(LogoutBtn);
            LoginStatDiv.appendChild(ListItem);
            LoginStatDiv.appendChild(ListItemBtn);

        }
    }

    render() {
        return (
            <Router>
            <div>
                <form>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link"><i><b><i class="fas fa-home"></i> HOME</b></i></Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/register" className="nav-link"><i><b><i class="fas fa-registered"></i> REGISTER NOW !</b></i></Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/aboutus" className="nav-link"><i><b><i class="far fa-address-card"></i> ABOUT US</b></i></Link>
                            </li>
                            <li className="navbar-item">
                                <Link onClick={()=>{this.openUserPortal()}} className="nav-link"><i><b><i class="fas fa-user-graduate"></i> STUDENT PORTAL</b></i></Link>
                            </li>
                            
                            <div id="LoginStat" className="navbar-nav mr-auto" style={{position:'absolute',right:10}}>
                            </div>

                        </ul>
                    </div>
                </nav>
                </form>
            </div>
                <Route path="/login" exact component={LoginOthersComp} />
                <Route path="/Student/" exact component={Home} />
                <Route path="/register" exact component={RegisterStudent} />
                <Route path="/aboutus" exact component={AboutUs} />
            </Router>
        );
    }
}