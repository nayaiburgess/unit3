import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Playlists from './components/Playlists';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import User from './components/User'; 

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar/> 
          <Route exact path = "/" component ={Home} />
          <Route exact path = "/user" component ={User} />
          <Route exact path = "/playlist" component ={Playlists} />
      </div>
      </Router>
       
    );
  }
}

export default App;
