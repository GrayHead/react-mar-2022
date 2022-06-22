export default function Post({item, color, chosePost}) {

    return (<div>
            {item.id} {item.title}
            <button onClick={() => {
                chosePost(item);
            }}> details
            </button>


        </div>

    );
}
