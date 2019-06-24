import React,{Component} from 'react';
import axios from 'axios';

const AllDeatils = props => (
    <tr>
        <td><b>{props.alldetails.firstname}</b></td>
        <td><b>{props.alldetails.lastname}</b></td>
        <td><b>{props.alldetails.department }</b></td>
        <td><b>{props.alldetails.crs1 }</b></td>
        <td><b>{props.alldetails.crs2 }</b></td>
        <td><b>{props.alldetails.crs3 }</b></td>
    </tr>
)


export default class DashBoard extends Component {

    constructor(props){
        super(props);

        this.state = {
            Modules :[]};

    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/getins/')
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

                <h1><b><i> VIEW INSTRUCTORS </i></b></h1>

                <table className = "table table-bordered table-hover table-striped" style={{ marinTop:20}}>
                    <thead>
                    <tr>
                        <th><h2>First Name</h2></th>
                        <th><h2>Last Name</h2></th>
                        <th><h2>Department</h2></th>
                        <th><h2>Course 1</h2></th>
                        <th><h2>Course 2</h2></th>
                        <th><h2>Course 3</h2></th>


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
