import React, {Component} from 'react';
import Some from "./Some";

class User extends Component {


    constructor(props, context) {
        super(props, context);
        this.xxx = this.props.item;
        this.id = 0;
    }


    render() {
        return (<div>
            {this.xxx.id} {this.xxx.name}
            <Some/>
        </div>);
    }


    componentDidMount() {
        console.log('mount');
        // this.id = setInterval(() => {
        //     console.log('interval', this.xxx.id)
        // }, 1000);
    }

    componentWillUnmount() {
        console.log('unmount');
        // clearInterval(this.id);
    }
}

export default User;
