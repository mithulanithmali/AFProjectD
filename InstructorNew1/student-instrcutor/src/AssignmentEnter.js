import React,{Component} from 'react';
import axios from 'axios';

const Course = props=>(
  <option value={props.course.code}>{props.course.name}</option>
)



class AssignmentEnter extends  Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            Name:'',
            Description:'',
            dueDate:'',
            course:'',
            courses:[]
        }
    }


    componentDidMount() {
            axios.post('http://localhost:3000/sinstructors/allCourses').then(response=>{
                console.log("response"+JSON.stringify(response));
                this.setState({courses:response.data})
            }).catch(function (error){
                console.log(error);
            }).finally(function(){
                console.log("done");
            })
    }


    courseDrop(){
       return this.state.courses.map(function(object,i){
           return <Course course={object} key={i}/>;
       })
    }
   

    onChangeName(e){
        this.setState({
            Name: e.target.value
        })
    }
    onChangeCourse(e){
        this.setState({
            course: e.target.value
        })
    }
    onChangeDate(e){
        this.setState({
            dueDate: e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            Description: e.target.value
        })
    }

  

    onSubmit(e){
        e.preventDefault();

        const ass = {
            Name:this.state.Name,
            Description:this.state.Description,
            course:this.state.course,
            dueDate:this.state.dueDate
        }
        axios.post('http://localhost:3000/sinstructors/add2',ass).then(resolve=>{
            console.log(resolve.data.data);
            this.setState({
                Name:'',
                Description:'',
                course:'',
                dueDate:''
            })
        }).catch(err=>{
            console.log(err)
        })

    }

    
    render(){
        return(
            <div className='card'>
                <div className='card-header'>

                </div>
                <div className='card-body'>
                    <form className='form' onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label>Assignment Name</label>
                            <input type='text' value={this.state.Name} onChange={this.onChangeName} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Course</label>
                            <select value={this.state.course} onChange={this.onChangeCourse} className='form-control'>
                                <option>Select the Course</option>
                                    {this.courseDrop()}
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <input type='text' value={this.state.Description} onChange={this.onChangeDescription} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Due Date</label>
                            <input type='date' value={this.state.dueDate} onChange={this.onChangeDate} className='form-control'/>
                        </div>
                        <div className='form-group'>

                            <button type='submit' className='btn  btn-success'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AssignmentEnter;