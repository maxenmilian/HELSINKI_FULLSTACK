import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const AnecdoteOfTheDay = (props) => (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[props.selected]}<br/>
        has {props.points[props.selected]} votes
        <br/>     
    </div>
)

const AnecdoteWithMostVotes = function (props){
    let arr = Array.from(props.points);
    let i = arr.indexOf(Math.max(...arr));
    return (<div>
        <h1>Anecdote with most votes</h1>
        {props.anecdotes[i]}<br/>
        has {props.points[i]} votes
        <br/>     
    </div>)
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0));

  return (
    <div>
        <AnecdoteOfTheDay anecdotes={props.anecdotes} points={points} selected={selected}/>   
        <Button handleClick={incrementPoints} text="vote"/><Button handleClick={getRandomAnecdote} text="next anecdote"/>
        <AnecdoteWithMostVotes anecdotes={props.anecdotes} points={points}/>  
    </div>
  )

  function getRandomAnecdote(){
      let rand = 0;
      while (rand === selected)
      {
          rand = Math.floor(Math.random()*props.anecdotes.length);
      }
      setSelected(rand);
  }

  function incrementPoints(){
      let copy = Array.from(points);
      copy[selected]+=1;
      setPoints(copy);
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)