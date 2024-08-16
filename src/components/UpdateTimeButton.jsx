import React from 'react'
import { useDispatch } from 'react-redux'
import { updateChronoValues } from '../features/chrono'

export default function UpdateTimeButton({sign, type}) {

  const dispatch = useDispatch()
  
  function handleClick(){
    dispatch(updateChronoValues({type, value: sign === "+" ? 60 : -60}))
  }
  
  return (
    <button 
    onClick={handleClick} 
    className="w-8 h-8 text-4xl text-slate-700 bg-slate-200 rounded flex
    justify-center items-center hover:bg-slate-400">
        <span className="relative text-3xl pointer-events-none">{sign}</span>
    </button>
  )
}
