import {useEffect, useState} from "react";
import UserComponent from "./UserComponent";

export default function UsersComponent() {

    let [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });

    }, []);


    return (<div>
        {
            users.map(user => <UserComponent user={user} key={user.id}/>)
        }

    </div>);
}
