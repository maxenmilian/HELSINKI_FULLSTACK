import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = props => <tr><td>{props.text}</td>  <td>{props.value}</td></tr>

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )  

const Statistics = (props) => {

    if (props.good > 0 || props.neutral > 0 || props.bad > 0){
        return (<div>
            <Statistic value={props.good}       text="good" />
            <Statistic value={props.neutral}    text="neutral" />
            <Statistic value={props.bad}        text="bad" />
            <Statistic value={average(props.good,props.neutral,props.bad)}        text="average" />
            <Statistic value={positive(props.good,props.neutral,props.bad)}        text="positive" />
        </div>)    
    }
    else{
        return (<div>        
            No feedback given
        </div>)   
    }
}

  function average(good, neutral, bad){
      return (good-bad)/(good+neutral+bad);
  }

  function positive(good, neutral, bad){
      return (good*100)/(good+neutral+bad) + " %" ;
  }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good+1)}         text="good" />
        <Button handleClick={() => setNeutral(neutral+1)}   text="neutral" />
        <Button handleClick={() => setBad(bad+1)}           text="bad" />        
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)