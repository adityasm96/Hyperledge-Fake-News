import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
class Viewnews extends Component{

    constructor(props){
        super(props)
        this.state={
            key: this.props.match.params.key,
            news_id:'',
            Accounts:[]
        }
    }
   
    componentDidMount(){
        
        const URL = `http://localhost:8080/api/query/`;
        const URL1= URL.concat(this.state.key)
        
            axios.get(URL1)
              .then(res => {
                const Accounts = res.data;
                this.setState(Accounts );
                console.log(Accounts)
              })
          
 
    }
    render(){
        
        
                
                
                
            
        
        return(
            
            
                
                    
                    <div>
                    <iframe src={`https://ipfs.io/ipfs/${this.state.Accounts.content_hash}`} width="100%" height="1000px">
                     </iframe>
                   </div>
                    

        )
    }




}
export default Viewnews  