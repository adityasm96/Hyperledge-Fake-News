import React,{ Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Voting extends Component{

    constructor(props){
        super(props)
        
        
        this.state={
            key: this.props.match.params.key,
            news_id:'',
            Accounts:[],
            
            value1:''
            
        }
        
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const URL = `http://localhost:8080/api/Update_vote/`;
        const URL1= URL.concat(this.state.key)
        

    axios.put(URL1,{'value':this.state.value1})
    .then(res =>{const Accounts = res.data;
        this.setState({ Accounts });
        console.log(Accounts)
      })

    
    }
    render(){
        const {news_id,value1,key}=this.state
        
        return(
            
            <form onSubmit={this.handleSubmit}>
                <div>
                        <label>News_id:::{key}</label>
                        
                    </div>
                    <div>
                        <label>Value:</label>
                        <input
                        type='text'
                        name='value1'
                        value={value1}
                        onChange={this.handleChange}>

                        </input>
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                    
                    </form>
                   
                    

        )
    }
    }
    export default Voting