import Counter from "./components/Counter";
import './index.scss';

const App = () => {
    return (
        <div className="app">
            Нажимай на кнопку!
            <Counter />
        </div>
    )
}

export default App;