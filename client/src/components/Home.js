import React, { Component } from 'react';
import Link from 'react-router-dom';
class Home extends Component {
    render() {
        return (
                <section className  ="hero is-success is-fullheight" style= {{ backgroundImage: "linear-gradient( rgba(212, 61, 144, 0.39),  rgba(228, 5, 127, 0.582)), url('https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80')", backgroundRepeat: "no-repeat" , backgroundSize: "cover" }}>
                <div className ="hero-body homeContent">

                  <div className ="container">
                    <h1 className ="homeLogo">
                      playlistME! 
                    </h1>
                    <Link to = "/new-playlist"> <button className="button is-warning homeButton" > Create Playlist </button></Link>
                  </div>
                </div>
              </section>

                );
            }
        }
        
export default Home;