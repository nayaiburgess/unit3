import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';




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
                alert("your playlist was created! click here to view all")
            })
    }

    render() {
        return (
            <div>
                <Navbar />

                <div style={{ width: "600px", textAlign:"center", marginTop: "20px" }} class="container" >



                    <form onSubmit={this.handleSubmit}>

                    <div class="field">
                        <label class="label">Playlist Name</label>
                        <div class="control">
                        <input class="input" type="text" name="name" value={this.state.playlists.name} placeholder="Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Cover Art</label>
                        <div class="control">
                        <input class = "input" type="text" name="coverArt" value={this.state.playlists.coverArt} placeholder="Image Url" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="columns">

                    <div class="column">
                    <div class="field">
                        <label class="label">Song 1</label>
                        <div class="control">
                        <input class="input" type="text" name="song1" value={this.state.playlists.song1} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 2</label>
                        <div class="control">
                        <input class="input" type="text" name="song2" value={this.state.playlists.song2} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 3</label>
                        <div class="control">
                        <input class="input" type="text" name="song3" value={this.state.playlists.song3} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 4</label>
                        <div class="control">
                        <input class="input" type="text" name="song4" value={this.state.playlists.song4} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 5</label>
                        <div class="control">
                        <input class="input" type="text" name="song5" value={this.state.playlists.song5} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    </div>
<div class="column">
                    <div class="field">
                        <label class="label">Song 6</label>
                        <div class="control">
                        <input class="input" type="text" name="song6" value={this.state.playlists.song6} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 7</label>
                        <div class="control">
                        <input class="input" type="text" name="song7" value={this.state.playlists.song7} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 8</label>
                        <div class="control">
                        <input class="input" type="text" name="song8" value={this.state.playlists.song8} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 9</label>
                        <div class="control">
                        <input class="input" type="text" name="song9" value={this.state.playlists.song9} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Song 10</label>
                        <div class="control">
                        <input class="input" type="text" name="song10" value={this.state.playlists.song10} placeholder="Song Name" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    </div>

                    </div>
                        <button class= "button is-danger">Submit</button>
                    </form>


                  
                </div>
            </div>

        );
    }
}

export default newPlaylist;