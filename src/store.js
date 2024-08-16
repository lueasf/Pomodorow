import { configureStore } from "@reduxjs/toolkit";
import chrono from "./features/chrono"

export const store = configureStore({
    reducer: {
        chrono
    }
}) 

/* rappel : le store est un objet qui contient l'ensemble de l'état de l'application
et qui est le seul à pouvoir le modifier. Il est créé à partir de la fonction configureStore()
qui vient de la librairie Redux Toolkit. */
