import React, {Component} from 'react';
import axios from 'axios';


export default class AddQuestion extends Component{

    constructor(props){
        super(props);

        this.state={
            itNum:'',
            module:'',
            question:'',
            email:''
        };

        this.onChangeITNumber = this.onChangeITNumber.bind(this);
        this.onChangeModules = this.onChangeModules.bind(this);
        this.onChangeQuestions = this.onChangeQuestions.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeITNumber(e) {
        this.setState({
            itNum: e.target.value
        })
    }
    onChangeModules(e) {
        this.setState({
            module: e.target.value
        })
    }
    onChangeQuestions(e) {
        this.setState({
            question: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const AddQuestions = {
            itNum:this.state.itNum,
            module:this.state.module,
            question:this.state.question,
            email:this.state.email

        }
        axios.post('http://localhost:4000/addQuestion/add/',AddQuestions).then(resolve=>{
            console.log(resolve.data.data);
            this.setState({
                itNum:'',
                module:'',
                question:'',
                email:''

            })
        }).catch(err=>{
            console.log(err)
        })

    }

    render() {
        return(

            <div>
                <h3>Ask Your Questions </h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">IT Number : </label>
                            <input type="text" placeholder="ITxxxxxxxx" value={this.state.itNum} onChange={this.onChangeITNumber}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">Module Name: </label>
                            <input type="text" placeholder="Enter module Name" value={this.state.module} onChange={this.onChangeModules}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label"> Enter Question : </label>
                            <input type="text" placeholder="Enter Question" value={this.state.question} onChange={this.onChangeQuestions}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-6 col-form-label">Email : </label>
                            <input type="text" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                        </div>
                        <br/>
                        <br/>
                        <div className="input-group">
                            <div className="col-md-8">
                                <input type="submit" className="btn btn-primary" value="Submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }


}