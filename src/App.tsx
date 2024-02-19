
import Header from "./part1/Header";
import Courses from "./part1/1.3/Courses";
// import Counter from "./part1/Counter";
import { useState } from "react";
import Counter from "./part1/Counter";
import Clicker from "./part1/Clicker";
import Counterdouble from "./part1/Counterdouble";
import Feedback from "./part1/1.6/Feedback";


function App() {
  const [counter, setCounter] = useState(0);

  <div className="container display-flex justify-content-center"></div>

  const course = {
    name:'Half Stack application development',
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

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return <>
      <Counter counter = {counter}/>
      <Feedback title="Feedback" op1="Good!" op2="Neutral" op3="Bad!"/>
      <Header header = {course.name}/>

      {course['parts'].map((item) => (
        <>        
        <Header header = {item.name}/>
        <Courses exercises = {item.exercises}/>
        </>
      ))}

      <div className="container-fluid py-5 d-flex justify-content-center aling-item-center">
        <Clicker />
      </div>
      <div className="container-fluid py-5 d-flex justify-content-center aling-item-center">
        <Counterdouble />
      </div>

    </>
}

export default App
