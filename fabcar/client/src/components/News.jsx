import React, { Component } from 'react';
import { Grid, Row, Col, Image, Jumbotron } from 'react-bootstrap';



import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  componentWillMount() {
    
  }


  render() {
    return (
      <div>
        
        <Jumbotron>
          <h2>LOGIN</h2>
          <Link to="/Editor"><Button bsStyle="primary">Editor</Button></Link> 
          <Link to="/Auditor"><Button bsStyle="primary">Auditor</Button></Link>
          <Link to="/Normal_user"><Button bsStyle="primary">Normal user</Button></Link>
          
        </Jumbotron>
        
      </div>
    )
  }
}
