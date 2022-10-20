import "./App.css"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import CakeContainer from "./Components/CakeContainer"
import CakeHookContainer from "./Components/CakeHookContainer"
import IceCreamContainer from "./Components/IceCreamContainer"
import NewCakeContainer from "./Components/NewCakeContainer"
import FetchComponent from "./Components/FetchComponent"

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer />
                <CakeHookContainer />
                <IceCreamContainer />
                <NewCakeContainer />
                <FetchComponent />
            </div>
        </Provider>
    )
}

export default App
