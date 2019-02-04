import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
class Navbar extends Component {
    render() {
        return (

<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <h1 className= "navLogo">playlistME!</h1>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
     
      <Link to='/' class="navbar-item">Home</Link>
      <Link to='/all-playlists' class="navbar-item">Playlists</Link>

      <Link to='/new-playlist' class="navbar-item"> Create Playlist</Link>

      <Link to='/all-users' class="navbar-item">Users</Link>

      </div>
    </div>

</nav>

        );
    }
}

export default Navbar;