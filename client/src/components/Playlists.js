import React, { Component } from 'react';
import axios from 'axios';
import NewPlaylist from "./NewPlaylist";

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
                <h1>This is the Playlists page.</h1>
                {this.state.playlist.map((playlists, i) => (
                        <div key={i}>
                            <h3>{playlists.name}</h3>
                            <img src = {playlists.coverArt} alt ="coverart" /> 
                            <h3>{playlists.song1}</h3>
                            <h3>{playlists.song2}</h3>
                            <h3>{playlists.song3}</h3>
                            <h3>{playlists.song4}</h3>
                            <h3>{playlists.song5}</h3>
                            <h3>{playlists.song6}</h3>
                            <h3>{playlists.song7}</h3>
                            <h3>{playlists.song8}</h3>
                            <h3>{playlists.song9}</h3>
                            <h3>{playlists.song10}</h3>
                            
                            <button onClick={()=>(this.deletePlaylist(playlists._id))}>Delete</button>

                        </div>
                    ))}
                <NewPlaylist getAllPlaylists = {this.getAllPlaylists} />


            </div>
        );
    }
}

export default Playlists;