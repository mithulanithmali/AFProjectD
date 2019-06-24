import React,{Component} from 'react';
import axios from 'axios';

export default class AssignmentEdit extends Component{
       
    constructor(props){
        super(props);

    
        this.onchangeName = this.onchangeName.bind(this);
        this.onchangeDescription=this.onchangeDescription.bind(this);
        this.onchangeDate = this.onchangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    
        this.state ={
          Name :'',
          Description :'',
          dueDate :'',
         
        }
      }


      componentDidMount(){
        axios.get('http://localhost:3000/sinstructors/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                Name:response.data.Name,
                Description:response.data.Description,
                dueDate:response.data.dueDate,
               
            })
        }).catch(function(error){
            console.log(error);
        })
}



    onchangeName(e){
        this.setState({
          Name:e.target.value
        });
    }
    
      onchangeDescription(e){
        this.setState({
          Description:e.target.value
        });
      }
       
    
        onchangeDate(e){
          this.setState({
            dueDate:e.target.value
          });
        }
 
    onSubmit(e){
          
      e.preventDefault();
       
          const Obj ={
            Name : this.state.Name,
            Description : this.state.Description,
            dueDate : this.state.dueDate,
            
         };

    axios.post('http://localhost:3000/sinstructors/update/'+this.props.match.params.id,Obj)
    .then(res=>console.log(res.data));

    this.props.history.push('/');

    }



    render(){
            return(
                <div>
                <div style={{marginTop:20}}>
                   <h3>Assignment Update </h3>
                    <form onSubmit={this.onSubmit}>
                        

                        <div className="form-group">
                        <label>Name :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onchangeName}/>  
                        </div>

                        <div className="form-group">
                        <label>Description :</label>
                        <input type="textArea"
                            className="form-control"
                            value={this.state.Description}
                            onChange={this.onchangeDescription}/>  
                        </div>

                        <div className="form-group">
                        <label>Due Date :</label>
                        <input type="Date"
                            className="form-control"
                            value={this.state.dueDate}
                            onChange={this.onchangeDate}/>  
                        </div> 

                        
                        
                    <div className="form-group">
                        <input type="Submit" value="Update Details" className="btn btn-primary"></input>
                    </div>

                    </form>

                </div>
                </div>
            )
        }
}
