import React, { Component } from 'react';
import axios from 'axios'; 


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
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = "text" name = "name" value ={this.state.Users.name} placeholder = "Name" onChange = {this.handleChange}></input>
                    <input type = "text" name = "bio" value = {this.state.Users.bio} placeholder = "bio" onChange = {this.handleChange}></input>
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

export default newUsers;