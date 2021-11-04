import React, {useState} from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = () => (<h1>Give feedback!</h1>)

const Statistics = (props) => {
  if(props.all === 0) {
    return (<p>No feedback given</p>)
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={props.all} />
      <StatisticLine text="Average" value={props.average} />
      <StatisticLine text="Positive" value={props.positive} />
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
    <tbody>
      <tr>
        <td width="60px">{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodValue = newValue => {
    setGood(newValue);
  }

  const increaseNeutralValue = newValue => {
    setNeutral(newValue);
  }

  const increaseBadValue = newValue => {
    setBad(newValue);
  }

  const all = good+neutral+bad; 
  const average = ((good*1)+(neutral*0)+(bad*(-1)))/all;
  const positive = good/all + ' %';

  return (
    <div>
      <Header />
      <Button handleClick={() => increaseGoodValue(good+1)} text="Good" />
      <Button handleClick={() => increaseNeutralValue(neutral+1)} text="Neutral" />
      <Button handleClick={() => increaseBadValue(bad+1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} 
      all={all} average={average} positive={positive} />
    </div>
  );
}

export default App;
