import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Playlists from './components/Playlists';
import Home from './components/Home'; 
import User from './components/User'; 
import NewPlaylist from './components/NewPlaylist'; 



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component ={Home} />
          <Route exact path = "/all-users" component ={User} />
          <Route exact path = "/new-playlist" component ={NewPlaylist} />
          <Route exact path = "/all-playlists" component ={Playlists} />

      </div>
      </Router>
       
    );
  }
}

export default App;
