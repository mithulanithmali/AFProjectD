import React,{Component} from 'react';
import axios from 'axios';

const AllDeatils = props => (
    <tr>
        <td><b>{props.alldetails.cname}</b></td>
        <td><b>{props.alldetails.code}</b></td>
        <td><b>{props.alldetails.department }</b></td>
        
    </tr>
)


export default class DashBoard extends Component {

    constructor(props){
        super(props);

        this.state = {
            Modules :[]};

    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/getcrs/')
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

                <h1><b><i> VIEW COURSES </i></b></h1>

                <table className = "table table-bordered table-hover table-striped" style={{ marinTop:20}}>
                    <thead>
                    <tr>
                        <th><h2> Course Name</h2></th>
                        <th><h2>Course Code</h2></th>
                        <th><h2>Department</h2></th>
                                 
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
