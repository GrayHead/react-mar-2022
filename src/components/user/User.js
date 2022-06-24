export default function User({asd, item}) {
    return (<div>
        {item.name}
        <button onClick={() => {
            asd(item);
            console.log('asdsad');
        }}>choose
        </button>

    </div>);
}
