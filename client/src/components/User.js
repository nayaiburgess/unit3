import React, { Component } from 'react';
import axios from "axios";
import NewUser from './NewUser';
import Navbar from './Navbar';

class User extends Component {
    state = {
        users: [{}]
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/user')
            .then((res) =>
                this.setState({ users: res.data })
            )
    }

    deleteUser = (user) => {
        axios.delete(`/api/user/${user}`).then(() => {
            this.setState({
                users: this.state.users.filter(item => item._id !== user)
            })
        })
    }

    render() {
        return (
            <div >
                <Navbar />
                {this.state.users.map((user, i) => (
                    <div style = {{marginTop: "50px"}} key={i}>

                        <div class="container" style={{ width: "500px" }}>

                            <div class="card">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">{user.name}</p>
                                        </div>
                                    </div>

                                    <div class="content">
                                        {user.bio}
                                        <br />
                                    </div>
                                </div>
                        <button style = {{ margin: "15px"}}class="button is-warning" onClick={() => (this.deleteUser(user._id))}>Delete</button>
                            </div> 

                        </div>

                    </div>

                ))}
                <NewUser getAllUsers={this.getAllUsers} />
            </div>
        );
    }
}

export default User;