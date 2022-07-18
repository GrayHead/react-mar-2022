import {useSelector} from "react-redux";

export default function PostsComponent() {
    let posts = useSelector(state => state.posts);
    return (
        <div>
            {
                posts.map(value => <div key={value.id}>{value.title}</div>)
            }

        </div>
    );
}
