import {useDispatch, useSelector} from "react-redux";
import {
    Routes, Route, Link
} from "react-router-dom";
import UsersComponent from "./UsersComponent";
import PostsComponent from "./PostsComponent";
import Home from "./Home";

export default function App() {


    return (<div>

        <ul>
            <li><Link to={'/'}>state home</Link></li>
            <li><Link to={'/users'}>users</Link></li>
            <li><Link to={'/posts'}>posts</Link></li>
        </ul>

        <Routes>
            <Route path={''} element={<Home/>}/>
            <Route path={'users'} element={<UsersComponent/>}/>
            <Route path={'posts'} element={<PostsComponent/>}/>

        </Routes>


    </div>);
}
