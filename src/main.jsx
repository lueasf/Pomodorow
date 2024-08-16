import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import {store} from "./store"
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
)

// console.log(store);

// provider :composant qui permet de donner accès à l'ensemble de l'application à notre store.