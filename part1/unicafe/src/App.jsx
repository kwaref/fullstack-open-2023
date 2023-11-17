import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = () => (good + neutral + bad)/3
  const all = () => (good + neutral + bad)
  // const positive = () => 

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood((good) => good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral((neutral) => neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad((bad) => bad + 1)}>
          bad
        </button>
      </div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all()}</p>
      <p>average {average()}</p>
      <p>positive {good/all()} %</p>
    </>
  )
}

export default App
