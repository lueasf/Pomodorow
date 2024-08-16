import UpdateTimeButton from "./components/UpdateTimeButton"
import ToggleButton  from "./components/ToggleButton"
import { useSelector } from "react-redux" // selectionner le state qu'on veut
import getformattedValue from "./utils/getformattedValue"

function App() {
  
  const chronoValues = useSelector(state => state.chrono);

  return ( 
    <div className="text-slate-100 pt-20 min-h-screen" style={{background: "linear-gradient(180deg, rgba(0,0,25,1) 0%, rgba(0,70,215,1) 100%)"}}>
      <div className="max-w-xl mx-auto border border-2 border-slate-500 rounded p-10">
        <h1 className="text-center text-5xl mb-8">POMODOROW</h1>

        <div className="flex justify-center mb-8">

          {/* Sessions */}
          <div className="mr-10">
            <p className="text-center mb-2">Sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={'-'} type={"sessions"}/>
              <p className="mx-4 text-xl">{chronoValues.session.value/60}</p>
              <UpdateTimeButton sign={'+'} type={"sessions"}/>
            </div>
          </div>

          {/* Break */}
          <div>
            <p className="text-center mb-2">Pauses</p>
            <div className="flex">
            <UpdateTimeButton sign={'-'} type={"pauses"}/>
              <p className="mx-4 text-xl">{chronoValues.pause.value/60}</p>
              <UpdateTimeButton sign={'+'} type={"pauses"}/>
            </div>
          </div>

        </div>

          <p className="text-center mb-2 text-xl font-semibold">{chronoValues.displayedValue.heading}</p>
           <p className="text-center flex justify-center mb-1">
            <span className="text-4xl p-4 rounded bg-slate-300 mb-2 text-slate-900">
            {getformattedValue(chronoValues.displayedValue.value)}
            </span>
           </p>
           <p className="text-center mb-10">Passed cycle(s) : {chronoValues.cycles}</p>
           <ToggleButton />

      </div>
      <footer className="text-center fixed bottom-10 w-full">
        <div className="container mx-auto">
          <span>Made with ❤️ by Lucie</span>
        </div>
      </footer>
    </div>
  )
}

export default App
