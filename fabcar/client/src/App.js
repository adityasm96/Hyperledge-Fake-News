import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Editor from './components/Editor';
import Auditor from './components/Auditor'
import Voting from './components/Voting'
import Viewnews from './components/Viewnews';
import Normal_user from './components/Normal_user';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news"  component={News}/>
          <Route path= "/Editor" component={Editor}/>
          <Route path="/Auditor" component={Auditor}/>
          <Route path="/Voting/:key" component={Voting}/>
          <Route path="/Viewnews/:key" component={Viewnews}/>
          <Route path="/Normal_user" component={Normal_user}/>
          
         
        </div>
      </Router>
    );
  }
}

export default App;
