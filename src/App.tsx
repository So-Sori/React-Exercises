import Header from "./part1/Header";
import Courses from "./part1/Courses";

function App() {
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
  return (
    <>
      <Header header = {course.name}/>


      {course['parts'].map((item) => (
        <>        
        <Header header = {item.name}/>
        <Courses exercises = {item.exercises}/>
        </>
      ))}

    </>
  )
}

export default App
