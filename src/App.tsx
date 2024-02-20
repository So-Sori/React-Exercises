
import Courses from "./part2/2.1/Courses";
import { useState } from "react";
import { ICourse } from "./part2/2.1/Courses";
import Counter from "./part1/Counter";
import Clicker from "./part1/Clicker";
import Counterdouble from "./part1/Counterdouble";
import Feedback from "./part1/1.6/Feedback";


function App() {
  const [counter, setCounter] = useState(0);

  <div className="container display-flex justify-content-center"></div>

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return <>
      <Counter counter = {counter}/>
      <Feedback title="Feedback" op1="Good!" op2="Neutral" op3="Bad!"/>

      <Courses course={courses} sum={0}/>

      <div className="container-fluid py-5 d-flex justify-content-center aling-item-center">
        <Clicker />
      </div>
      <div className="container-fluid py-5 d-flex justify-content-center aling-item-center">
        <Counterdouble />
      </div>

    </>
}

export default App
