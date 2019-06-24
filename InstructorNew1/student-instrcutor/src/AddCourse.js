import React,{Component} from 'react';
import axios from 'axios';

class AddCourse extends  Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeLec = this.onChangeLec.bind(this);
        this.onChangeMark = this.onChangeMark.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name:'',
            code:'',
            lec:'',
            mark:''
        }
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    onChangeCode(e){
        this.setState({
            code: e.target.value
        })
    }
    onChangeLec(e){
        this.setState({
            lec: e.target.value
        })
    }
    onChangeMark(e){
        this.setState({
            mark: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const course = {
            name:this.state.name,
            code:this.state.code,
            lec:this.state.lec,
            mark:this.state.mark
        }
        axios.post('http://localhost:3000/sinstructors/addCourse',course).then(resolve=>{
            console.log(resolve.data.data);
            this.setState({
                name:'',
                code:'',
                mark:'',
                lec:''
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
                            <label>Course Name</label>
                            <input type='text' value={this.state.name} onChange={this.onChangeName} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Course Code</label>
                            <input type='text' value={this.state.code} onChange={this.onChangeCode} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Lecturer In Charge</label>
                            <input type='text' value={this.state.lec} onChange={this.onChangeLec} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Pass Mark</label>
                            <input type='number' value={this.state.mark} onChange={this.onChangeMark} className='form-control'/>
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

export default AddCourse;