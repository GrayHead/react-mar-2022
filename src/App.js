import './App.css';
import Character from "./components/character/Character";

function App() {
    return (<div>
        <Character
            name={'BART'}
            desc={'iergusygj s kfhs kdjfh skdjfh'}
            picture={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
        />

        <Character
            name='Homer'
            desc='jahyqrfsgdfjgh jsh gfs fsj fgjh'
            picture='https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'

        />


    </div>);
}

export default App;
