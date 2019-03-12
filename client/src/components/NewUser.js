import React, { Component } from 'react';
import axios from 'axios'; 
import Navbar from './Navbar'


class newUsers extends Component {

    state = {
        Users: {
            name: '',
            bio: ''
        }
    }

 
    handleChange = (e) => {
        const newState = { ...this.state.Users }
        newState[e.target.name] = e.target.value
        this.setState({ Users: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newUsers = this.state.Users
        axios.post('/api/user', newUsers)
        .then((res) => {
            this.props.getAllUsers()
            this.props.toggleNewUser()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>


                <div style = {{ marginTop: "20px" }} class="field">

                        <label class="label"> Username </label>
                        <div class="control">
                        <input class="input" type="text" name="name" value={this.state.Users.name} placeholder="Name" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div style = {{ marginTop: "20px" }} class="field">

<label class="label"> Bio </label>
<div class="control">
<input class = "input" type = "text" name = "bio" value = {this.state.Users.bio} placeholder = "Bio" onChange = {this.handleChange}></input>
</div>
</div>

                    <button class="button is-warning is-small">Submit</button>
                </form>

            </div>
        );
    }
}

export default newUsers;