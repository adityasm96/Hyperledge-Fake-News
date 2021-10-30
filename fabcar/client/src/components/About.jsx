import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/about11.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            
            <h3>Blockchain and Fakenews </h3>
            <p>Blockchain technology is declared to be the emerging technologies to revolutionize the way information is produced and disseminated.</p>
  <p>          

Due to the traceability, transparency and decentralization nature of the blockchain, the problem of fake news can be handled effectively.</p>
<p>

The blockchain enabled platform can provide online readers with a reliable way of verifying the content and its source.</p>

          </Col>
        </Grid>
      </div>
    )
  }
}
