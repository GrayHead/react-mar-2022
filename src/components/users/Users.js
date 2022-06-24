import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [chosen, setChosen] = useState({});


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });
    }, []);


    return (<div>
        users cpm
        {chosen.email && <h3>{chosen.email}</h3>}

        {users.map((value, index) => <User
            key={index}
            item={value}
            asd={setChosen}


        ></User>)


        }

    </div>);
}
