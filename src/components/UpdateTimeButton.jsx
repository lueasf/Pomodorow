import React from 'react'

export default function UpdateTimeButton({sign, type}) {
  return (
    <button className="w-8 h-8 text-4xl text-slate-700 bg-slate-200 rounded flex
    justify-center items-center hover:bg-slate-400">
        <span className="relative text-3xl pointer-events-none">{sign}</span>
    </button>
  )
}
