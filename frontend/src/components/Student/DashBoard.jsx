import React,{Component} from 'react';
import axios from 'axios';

const AllDeatils = props => (
    <tr>
        <td><b>{props.alldetails.Name}</b></td>
        <td><b>{props.alldetails.EnrollmentKey}</b></td>
        <td><b>{props.alldetails.Year }</b></td>
        <td><b>{props.alldetails.Semester }</b></td>
    </tr>
)


export default class DashBoard extends Component {

    constructor(props){
        super(props);

        this.state = {
            Modules :[]};

    }

    componentDidMount(){
        axios.get('http://localhost:4000/Modules/')
            .then(response => {
                this.setState({ Modules : response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    allModules(){
        return this.state.Modules.map(function(currentDetails ,i){
            return <AllDeatils alldetails = {currentDetails} key = {i} />
        });
    }

    render() {
        return (

            <div className="container">

                <h1><b><i> VIEW MODULES </i></b></h1>

                <table className = "table table-bordered table-hover table-striped" style={{ marinTop:20}}>
                    <thead>
                    <tr>
                        <th><h2>Name</h2></th>
                        <th><h2>EnrollmentKey</h2></th>
                        <th><h2>Year</h2></th>
                        <th><h2>Semester</h2></th>
                        
                        <th><h2>           </h2></th>
                    </tr>

                    </thead>
                    <tbody>
                    {this.allModules()}
                    </tbody>
                    <br/>
                    <br/>
                </table>


            </div>

        );


    }

}
