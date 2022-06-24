import {useEffect, useState} from "react";

export default function UserGetter() {
    let [id, setId] = useState(1);
    let onClick = () => {
        setId(Math.round((Math.random() * 9) + 1));
    };

    let [user, setUser] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {

                setUser({...value});
            });

    }, [id])
    return (<div>
        <button onClick={onClick}> click me and get you will user</button>
        <h2>{user.name}</h2>

    </div>);
}
