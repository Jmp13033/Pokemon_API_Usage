import React from 'react'

export default function Page({GoToNext, GoToPrev}) {
  return (
    <div>
    <button onClick={GoToPrev}>Previous</button> <button onClick={GoToNext}> Next </button>
    
    </div>
  )
}
