import React,{Component} from 'react';
import axios from 'axios';


const Course = props=>(
    <option value={props.course.code}>{props.course.name}</option>
)

class AddSubject extends  Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name:'',
            course:'',
            amount:'',
            desc:'',
            courses:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/messages/courses/allCourses').then(resolve=>{
            console.log(resolve.data.data);
            this.setState({courses:resolve.data.data})
        }).catch(err=>{
            console.log(err);
        })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    onChangeCourse(e){
        this.setState({
            course: e.target.value
        })
    }
    onChangeAmount(e){
        this.setState({
            amount: e.target.value
        })
    }
    onChangeDesc(e){
        this.setState({
            desc: e.target.value
        })
    }

    courseDrop(){
        return this.state.courses.map(function(object,i){
            return <Course course={object} key={i}/>
        })
    }

    onSubmit(e){
        e.preventDefault();

        const subject = {
            name:this.state.name,
            course:this.state.course,
            desc:this.state.desc,
            amount:this.state.amount
        }
        axios.post('http://localhost:3000/api/messages/courses/addSubject',subject).then(resolve=>{
            console.log(resolve.data.data);
            this.setState({
                name:'',
                course:'',
                desc:'',
                amount:''
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
                            <label>Subject Name</label>
                            <input type='text' value={this.state.name} onChange={this.onChangeName} className='form-control'/>
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
                            <input type='text' value={this.state.desc} onChange={this.onChangeDesc} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Date</label>
                            <input type='Date' value={this.state.dueDate} onChange={this.onChange} className='form-control'/>
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

export default AddSubject;