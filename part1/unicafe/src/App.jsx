import { useState } from 'react'

const History = (props) => {
  if (props.good + props.bad + props.neutral === 0) {
    return (
      <p>No feedback given </p>
  )
  }
  const all = props.good + props.bad + props.neutral
  return (
  Statistics(props)
  )
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  return (
  <table>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={(props.good - props.bad)/(all)} />
    <StatisticLine text="positive" value={100*props.good/(all) + " %"}/>
  </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({ text, value }) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    console.log(good)
    setGood(good + 1)

  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text="good"/>
      <Button handleClick={addNeutral} text="neutral"/>
      <Button handleClick={addBad} text="bad"/>
      
      <h1>statistics</h1>
      
      <History good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App