import {useState} from "react";
import Users from "./components/users/Users";
import UserGetter from "./components/user-getter/UserGetter";

export default function App() {
    let [counter, setCounter] = useState(0);


    return (<div>
        <h1>{counter}</h1>
        <button onClick={() => {
            setCounter(++counter);

        }}>increment
        </button>

        <hr/>

        <Users/>

        <hr/>

        <UserGetter/>

    </div>);
}
