import {useForm} from "react-hook-form";

export default function App() {

    let usersIds = [{id: 1, name: 'asd'},
        {id: 2, name: '243ssfdsf'},
        {id: 3, name: '243ssfdsfasdasd'},
        {id: 4, name: '243ssfssdfdsf'},
        {id: 5, name: '243ssfdsf'},
        {id: 6, name: '243ssfdsf'},
        {id: 7, name: '243ssfdsf'},
        {id: 8, name: '243ssfdsf'},
        {id: 9, name: '243ssfdsf'},
        {id: 10, name: '243ssfdsf'},];

    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            title: 'title', body: 'body'
        }
    });


    let submit = (obj) => {
        console.log(obj);

        fetch("http://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
        })
            .then(response => response.json())
            .then(result => console.log(result));
    };

    return (<div>

        <form onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                {...register("title", {required: true})}/>

            {errors.title && <span> field is required </span>}

            <input
                type="text"
                {...register('body')}/>

            <select {...register("userId")}>
                {usersIds.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}


            </select>


            <button>save</button>
        </form>


    </div>);
}
