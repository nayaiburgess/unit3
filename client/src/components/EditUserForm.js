import React, { Component } from 'react';
import axios from 'axios'

class EditUserForm extends Component {
    state = {
        user: {
            username: '',
            bio: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const currentState = this.state.user
        const userId = this.props.userId
        axios.patch(`/api/users/${userId}`, currentState)
        .then((res) => {
            this.props.getSingleUser()
            this.props.toggleEditUserForm()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="bio"
                        value={this.state.user.bio}
                        onChange={this.handleChange}
                        name="bio"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditUserForm;