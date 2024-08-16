import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    session : {
        value : 1500,
        runningValue : 1500,
    },
    pause : {
        value : 300,
        runningValue : 300,
    },
    isPlaying : false,
    intervalID : undefined,
    cycles : 0,
    displayedValue : {
        value : 1,
        heading : "Work",
    }
}

export const chrono = createSlice({
    name: "chrono",
    initialState,
    reducers: {
        updateChronoValues
    }
})

export default chrono.reducer;


/*Rappel : CreateSlice de redux crée des slices (objet)
contenant des fonctions appelées des reducers, qui
vont modifier l'état du store*/