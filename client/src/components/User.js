import React, { Component } from 'react';
import axios from "axios";
import NewUser from './NewUser';

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
         this.setState({users: res.data})
         )
     }

     deleteUser = (user) => {
        axios.delete(`/api/user/${user}`).then(()=> {
            this.setState({
                users: this.state.users.filter(item => item._id !== user)
            })
        })
    }

    render() {
        return (
            <div>
                <h1>This is the Users page.</h1>
                {this.state.users.map((user, i) => (
                        <div key={i}>
                           <h3>{user.name}</h3>
                           <h3>{user.bio}</h3>
                           <button onClick={()=>(this.deleteUser(user._id))}>Delete</button>
                        </div>


                    ))}
                 <NewUser getAllUsers = {this.getAllUsers} />   
            </div>
        );
    }
}

export default User;