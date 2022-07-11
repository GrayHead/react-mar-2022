import React, {Component} from 'react';
import {UserApiService} from "../services/user.api.service";
import User from "./User";

class Users extends Component {

    state = {users: [], x: 'asdqwe'};


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.userApiService = new UserApiService();
        this.userApiService.getUsers().then(value => this.setState({users: value}));
    }


    render() {

        return (<div>
            {this.state.users.map(value => <User key={value.id} item={value}></User>)}

            <button onClick={() => {
                this.state.users.pop();

                this.setState({users: this.state.users});

            }}>delete last user
            </button>
        </div>);
    }
}

export default Users;
