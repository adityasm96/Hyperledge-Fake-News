import React,{Component, useImperativeHandle} from 'react'
import axios from 'axios'
import './Editor.css'

//const IPFS = require('ipfs-http-client');
// ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
class Postfrom extends Component{
    

    constructor(props){
        super(props)

        this.state={
          news_id:'',
            photographer_id: '',
            reporter_is: '',
            editor_id: '',
            title: '',
            votes:'0',
            voted:'0',
            content_url:'',
            content_hash:''
            
            
        }
        this.state2={buffer:null,
        ipfsHash:'',
      flag:true}
    }
    captureFile = (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
          this.state2.buffer= Buffer(reader.result) 
          console.log('buffer', this.state2.buffer)
        }

      }
    handleChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        }   
        )
        
    
    }
  



     handleipfs=async()=>{
      await ipfs.files.add(this.state2.buffer, (error, result) => {
        this.state2.ipfsHash=result[0].hash
        console.log(this.state2.ipfsHash)
        
        if(error) {
          console.error(error)
          return
        }
        
       return this.setState({content_hash:result[0].hash} )

          
        
      })

     


    }
    
     handleSubmit=async(e)=>{
        e.preventDefault()
        const URL = `http://localhost:8080/api/addnews`;
        
        console.log("Submitting file to ipfs...")
        await this.handleipfs()
        
   
         
      setTimeout(() => {
        
        axios(URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        
        data: this.state,
        
      })
        .then(response => response.data)
        .catch(error => {
          throw error;
        });
        
        alert("The news has been entered into the blockchain")
    
        
      }, 5000);  
    
  
    
    
  }
    render(){
        const {news_id,photographer_id,reporter_is,editor_id,title,content_url}=this.state
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                        <label>  News_id:  </label>
                        <input
                        type='text'
                        name='news_id'
                        value={news_id}
                        onChange={this.handleChange}>

                        </input>
                    </div>
                    <div>
                        <label>  Photographer_id:  </label>
                        <input
                        type='text'
                        name='photographer_id'
                        value={photographer_id}
                        onChange={this.handleChange}>

                        </input>
                    </div>
                    <div>
                        <label>  Reporter_id:  </label>
                        <input
                        type='text'
                        name='reporter_is'
                        value={reporter_is}
                        onChange={this.handleChange}>

                        </input>
                    </div>
                    <div>
                        <label>  Editor_id:  </label>
                        <input
                        type='text'
                        name='editor_id'
                        value={editor_id}
                        onChange={this.handleChange}>

                        </input>
                    </div>
                    <div>
                        <label>  Title:  </label>
                        <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={this.handleChange}>

                        </input>
                    </div>
                    <div>
                        <label>  Newsnetwork name:  </label>
                        <input
                        type='text'
                        name='content_url'
                        value={content_url}
                        onChange={this.handleChange}>

                        </input>
                    </div>
                    <div className="container-fluid mt-5">
          <div className="row">
           
              
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                <p>&nbsp;</p>
                
                <div >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </div>
              
            
          </div>
        </div>
                    
                </form>

            </div>

        
        )
    }
}
export default Postfrom