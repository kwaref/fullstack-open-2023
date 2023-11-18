import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteUp = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
    const maximum = Math.max(...newPoints)
    const idx = newPoints.indexOf(maximum)
    setMostVoted(idx)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        {`has ${points[selected]} ${points[selected]!==1?'votes':'vote'}`}
      </div>
      <div>
        <button onClick={voteUp}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[mostVoted]}
      </div>
      <div>
        {`has ${points[mostVoted]} ${points[mostVoted]!==1?'votes':'vote'}`}
      </div>
    </>
  )
}

export default App
