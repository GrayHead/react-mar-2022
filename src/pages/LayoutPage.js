import {Link,Outlet} from "react-router-dom";

export default function LayoutPage() {
    return (<div>
        <h3>sub menu</h3>
        <ol>
            <li>
                <Link to={'/layout/users'}>users</Link>

            </li>
            <li>
                <Link to={'posts'}>posts</Link>
            </li>
            {/*<Link to={'/'}>comments</Link>*/}
        </ol>

        <Outlet />


    </div>);
}
