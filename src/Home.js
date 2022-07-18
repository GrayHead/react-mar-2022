import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "./redux/actions/users.action";

export default function Home() {
    let dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch(loadUsers(value));
            });

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: "LOAD_POSTS", payload: value});
            });
    }, [])


    return (<div>
        Load is progress

    </div>);
}
