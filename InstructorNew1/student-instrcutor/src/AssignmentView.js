import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Assignment = props=>(

    <tr>

        <td>{props.assignment.Name}</td>
        <td>{props.assignment.Description}</td>
        <td>{props.assignment.dueDate}</td>

        <td>
            <Link to={"/edit/"+props.assignment._id}>Edit</Link>
         </td>
         <td>
            <Link to={"/delete/"+props.assignment._id}>Delete</Link>
         </td>

        
       
    </tr>
)

export default class AssignmentView extends Component{

    constructor(props){
        super(props);
        this.state={assignments:[]};
    }




componentDidMount(){
    axios.get('http://localhost:3000/sinstructors/').then(response=>{
        this.setState({assignments:response.data})
    })
    .catch(function (error){
        console.log(error);
    })
}




    AssignmentDetails(){
        return this.state.assignments.map(function(object,i){
            return <Assignment assignment={object} key={i}/>;
        })
    }


   

        render(){
            return(
                <div>
                  <h3>Assignment Details</h3>
                  <table className="table table-striped" style={{marginTop:20}}>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>edit</th>
                          <th>Delete</th>
                         
                          
                      </tr>
                  </thead>
                  <tbody>
                      {this.AssignmentDetails()}
                  </tbody>
                  
                  
                  </table>
                </div>
            )
        }
}
