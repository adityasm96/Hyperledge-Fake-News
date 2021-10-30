import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import table from 'react-bootstrap'
class Normal_user extends Component{
    constructor(props){
        super(props)
        this.state={
            news_id:'',
            Accounts:[]
        }
    }

componentDidMount() {
    const URL1='http://localhost:8080/api/queryAllNews'
    axios.get(URL1)
              .then(res => {
                const Accounts = res.data;
                this.setState(Accounts);
                return console.log(Accounts)
              })

}
render_news()
{
    
            return console.log(this.state.Accounts.map(account =>account.Key))
      

}

render(){
    

const tbody = this.state.Accounts.map(account => {
    console.log(this.state.Accounts) 
    return <tr key={account.Key}>
        
        <td>{account.Key}</td>
        <td>{account.Record.title}</td>
        <td>{account.Record.votes}/5</td>
        <td>{account.Record.voted}</td>
        <td>
                    <Link to={'/Viewnews/'+account.Key} className="waves-effect waves-light btn light-blue darken-3"><i className="material-icons">view the news</i></Link>
                </td>
        
        
    </tr>
   
})
return (
    
    <div>
        <h4>All news</h4>
        <table class='table'>
            <thead>
                <tr>
                    
                    <th>news_id</th>
                    <th>title</th>
                    <th>Current Rating   </th>
                    <th>number of people reviewed</th>
                    <th> View News  </th>
                    
                </tr>
            </thead>

            <tbody>
                {tbody}
            </tbody>
        </table>
    </div>
)
}
}
export default Normal_user