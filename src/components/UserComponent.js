import {Link} from "react-router-dom";

export default function UserComponent({user}) {
    return (<div>
        {user.name} - <span><Link to={user.id.toString()}>user posts </Link></span>

    </div>);
}
