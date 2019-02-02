import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class Playlists extends Component {
    state = {
       playlist: [{}]
    }
  
componentDidMount() {
    this.getAllPlaylists()
}

    getAllPlaylists = () => {
        axios.get('/api/playlists')
        .then((res) =>
        this.setState({playlist: res.data})
        )
    }

    deletePlaylist = (playlist) => {
        axios.delete(`/api/playlists/${playlist}`).then(()=> {
            this.setState({
                playlist: this.state.playlist.filter(item => item._id !== playlist)
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.state.playlist.map((playlists, i) => (
                        <div class= "container" key={i}>

                            <h1 style= {{fontWeight: "600", fontSize: "25pt"}}>{playlists.name}</h1>
                            <img src = {playlists.coverArt} alt ="coverart" /> 
                            <h3> 1. {playlists.song1}</h3>
                            <h3> 2. {playlists.song2}</h3>
                            <h3> 3. {playlists.song3}</h3>
                            <h3> 4. {playlists.song4}</h3>
                            <h3> 5. {playlists.song5}</h3>
                            <h3> 6. {playlists.song6}</h3>
                            <h3> 7. {playlists.song7}</h3>
                            <h3> 8. {playlists.song8}</h3>
                            <h3> 9. {playlists.song9}</h3>
                            <h3> 10. {playlists.song10}</h3> <br />

                            <button class="button is-danger" onClick={()=>(this.deletePlaylist(playlists._id))}>Delete</button>

                        </div>
                    ))}
<div class="container" style={{marginTop: "30px"}}>
<a href = "/new-playlist"> <button className="button is-warning" >Create Playlist</button></a>
</div>

            </div>
        );
    }
}

export default Playlists;