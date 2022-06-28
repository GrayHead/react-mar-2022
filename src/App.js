import Users from "./components/users/Users";
import {getUserPosts} from "./services/user.api.service";
import {useState} from "react";
import './App.css';
import Posts from "./components/posts/Posts";

export default function App() {

    let [posts, setPosts] = useState([]);
    const elevate = (id) => {
        getUserPosts(id).then(({data}) => {
            setPosts([...data]);
        })

    }

    return (<div className={'df'}>

        <div className={'left'}><Users elevate={elevate}/></div>
        <div className={'right'}>
            <Posts posts={posts}/>

        </div>

    </div>);
}
