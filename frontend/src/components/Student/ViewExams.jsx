//Show all train details to the users
import React ,{Component} from 'react';
import axios from 'axios';

const Exams = props => (
    <tr>
        <td><b>{props.exams.Name}</b></td>
        <td><b>{props.exams.EnrollmentKey}</b></td>
        <td><b>{props.exams.Module }</b></td>
        <td><b>{props.exams.Duration }</b></td>
        <td><b>{props.exams.question }</b></td>
    </tr>
)

export default class ViewAlldata extends Component{

    constructor(props){
        super(props);
        this.state = {examArray :[]};
    }

    componentDidMount(){
        //get train tickets details from the backend
        axios.get('http://localhost:4000/exams/')
             .then(response => {
                 this.setState({ examArray : response.data});
             })
             .catch(function (error){
                 console.log(error);
             })
    }

    viewExams(){
        return this.state.examArray.map(function(currentDetail ,i){
            return <Exams exams = {currentDetail} key = {i} />
        });
    }


    render(){
        return(
            <div>
                <h1><b><i>AVAILABLE EXAMS</i></b></h1>
                <table className = " tablecss table table-bordered table-hover table-striped  table-dark" style={{ marinTop:20}}>
                    <thead>
                        <tr>
                            <th><h2>Name</h2></th>
                            <th><h2>EntrollmentKey</h2></th>
                            <th><h2>Module</h2></th>
                            <th><h2>Duration</h2></th>
                            <th><h2>Question</h2></th>

                        </tr>

                    </thead>
                    <tbody>
                        {this.viewExams()}
                    </tbody>
                </table>
            </div>


        )
    }

}