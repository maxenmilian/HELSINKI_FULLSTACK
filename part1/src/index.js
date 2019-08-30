import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (<h1>{props.courseName}</h1>)
}

const Part = (props) => {
  return (<p>{props.part} {props.excercise}</p>)
}

const Content = (props) => {
  return [<Part part={props.p1} excercise={props.ex1}/>,
    <Part part={props.p2} excercise={props.ex2}/>,
    <Part part={props.p3} excercise={props.ex3}/>]
}


const Total = (props) => {
  return (<p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course}></Header>
      <Content p1={part1} p2={part2} p3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}></Content>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))