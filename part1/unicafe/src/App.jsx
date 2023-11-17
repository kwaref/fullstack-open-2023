import { useState } from 'react'

const StatisticLine = ({ text, value }) => (<p>{text} {value}</p>)

const Statistics = ({good, neutral, bad}) => {
  const average = () => (good + neutral + bad)/3
  const all = () => (good + neutral + bad)
  const positive = () => (all() !== 0 ? `${good/all() *100} %` : 0)

  return (<>
    <h1>statistics</h1>
    {
      (good !== 0 || neutral !== 0 | bad !== 0) ? 
    <>
      <StatisticLine text={'good'} value={good} />
      <StatisticLine text={'neutral'} value={neutral} />
      <StatisticLine text={'bad'} value={bad} />
      <StatisticLine text={'all'} value={all()} />
      <StatisticLine text={'average'} value={average()} />
      <StatisticLine text={'positive'} value={positive()} />
    </>:<p>No feedback given</p>
    }
  </> 
  )
}

const Button = ({ caption, current, handler }) => <button onClick={()=>handler((current)=>current+1)}>{caption}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <Button caption={'good'} current={good} handler={setGood} />
        <Button caption={'neutral'} current={neutral} handler={setNeutral} />
        <Button caption={'bad'} current={bad} handler={setBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
