import React, { Component } from 'react';
import axios from 'axios'; 




class newPlaylist extends Component {

    state = {
        playlists: {
            name: '',
            Coverart: '',
            Song1: '',
            Song2: '',
            Song3: '',
            Song4: '',
            Song5: '',
            Song6: '',
            Song7: '',
            Song8: '',
            Song9: '',
            Song10: ''
        }
    }

 
    handleChange = (e) => {
        const newState = { ...this.state.playlists }
        newState[e.target.name] = e.target.value
        this.setState({ playlists: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newPlaylist = this.state.playlists
        axios.post('/api/playlists', newPlaylist)
        .then((res) => {
            this.props.getAllPlaylists()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = "text" name = "name" value ={this.state.playlists.name} placeholder = "Name" onChange = {this.handleChange}></input>
                    <input type = "text" name = "coverart" value = {this.state.playlists.coverArt} placeholder = "Coverart Url" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song1" value = {this.state.playlists.song1} placeholder = "Song1" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song2" value = {this.state.playlists.song2} placeholder = "Song2" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song3" value = {this.state.playlists.song3} placeholder = "Song3" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song4" value = {this.state.playlists.song4} placeholder = "Song4" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song5" value = {this.state.playlists.song5} placeholder = "Song5" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song6" value = {this.state.playlists.song6} placeholder = "Song6" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song7" value = {this.state.playlists.song7} placeholder = "Song7" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song8" value = {this.state.playlists.song8} placeholder = "Song8" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song9" value = {this.state.playlists.song9} placeholder = "Song9" onChange = {this.handleChange}></input>
                    <input type = "text" name = "song10" value = {this.state.playlists.song10} placeholder = "Song10" onChange = {this.handleChange}></input>
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

export default newPlaylist;