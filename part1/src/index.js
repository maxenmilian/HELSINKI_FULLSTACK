import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (<h1>{props.courseName}</h1>)
}

const Part = (props) => {
  return (<p>{props.part.name} {props.part.exercises}</p>)
}

const Content = (props) => {
  var content = new Array(props.parts.length);
  props.parts.forEach(element => {
    content.push(<Part part={element}/>);
  });
  return (<div>{content}</div>);
}

const Total = (props) => {
  var total = 0;
  props.parts.forEach(element => {
    total += element.exercises;
  });
  return (<p>Number of exercises {total}</p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))