import {createSlice} from '@reduxjs/toolkit';

const initialState = { // on fait ref a ces attr avec state.qqch
    session : {
        value : 1500,
        runningValue : 1500,
    },
    pause : {
        value : 300,
        runningValue : 300,
    },
    isPlaying : false,
    intervalID : 0,
    cycles : 0,
    displayedValue : {
        value : 1500,
        heading : "Work",
    }
}

/*Rappel : CreateSlice de redux crée des slices (objet)
contenant des fonctions appelées des reducers, qui
vont modifier l'état du store*/

/* Méthode : updateChronoValues
pas moins de 1 pauses, quand on est en pause, la valeur du temps change,
quand on est en travail, la chrono ne change pas.*/

// payload est une prop de l'objet action.

export const chrono = createSlice({
    name: "chrono",
    initialState,
    reducers: {
        updateChronoValues : (state, action) => {
            const chosenState = state[action.payload.type];

            // blocage :
            if (chosenState.value + action.payload.value === 0) return

            if (action.payload.type === "session"){
                if (!state.isPlaying){
                    chosenState.value = chosenState.value + action.payload.value
                    chosenState.runningValue = chosenState.runningValue + action.payload.value
                    state.displayedValue.value = chosenState.runningValue
                }
                else {
                    chosenState.value = chosenState.value + action.payload.value
                }
            }
            else if(action.payload.type === "pause"){
                chosenState.value = chosenState.value + action.payload.value
                chosenState.runningValue = chosenState.value;
            }
        },
        tick: (state, action) =>{
            if(state.session.runningValue > 0){
                state.session.runningValue--;
                state.displayedValue.value =  state.session.runningValue
                state.displayedValue.heading = "Work"
            }
            else if(state.pause.runningValue > 0){
                state.pause.runningValue--;
                state.displayedValue.value = state.pause.runningValue
                state.displayedValue.heading = "Pause <3"
            }
            else {
                state.cycles++
                state.session.runningValue = state.session.value -1
                state.displayedValue.value = state.session.value -1
                state.displayedValue.heading = "Work"
                state.pause.runningValue = state.pause.value;
            }

        },
        setUpChrono: (state,action) => {
            state.isPlaying = true
            state.intervalID = action.payload
        },
        resetChrono : (state, action) => {
            window.clearInterval(state.intervalID)
            state.isPlaying = false
            state.session.runningValue = state.session.value
            state.pause.runningValue = state.pause.value
            state.displayedValue.value = state.session.runningValue
            state.cycles = 0
        }
    }
})

// midleware avec redux-thunk (avant le reducer)
export function startChrono(action){
    return function(dispatch, getState){
        const intervalID = setInterval(() =>{
            dispatch(tick()) 
        },1000) // toutes les 1s on dispatch tick (on envoie une action au store)
        
        dispatch(setUpChrono(intervalID))
        dispatch(tick()) // pour direct lancer le timer
    }
}

export const {updateChronoValues, resetChrono, setUpChrono, tick} = chrono.actions
export default chrono.reducer;