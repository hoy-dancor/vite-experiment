import { useState, useEffect } from 'react'
import { threeAndFive } from './math'
import './App.css'

function App() {
  const [formValue, setFormValue] = useState('')
  const [displayAnswer, setDisplayAnswer] = useState(null)

  const findResult = (e) => {
    e.preventDefault()
    // console.log(threeAndFive(formValue))
    setDisplayAnswer(threeAndFive(formValue))
  }

  return (
    <>
      <h1>Enter a value and we'll tell you the sum of all the multiples of 3 & 5 within it.</h1>
      <form onSubmit={findResult}>
        <input type="text" placeholder='Upper value' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <input type="submit" />
      </form>

      {displayAnswer !== null && <h3>
        The answer is: {displayAnswer}
        </h3>}
    </>
  )
}

export default App
