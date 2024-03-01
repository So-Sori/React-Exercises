
import { useState } from "react";
import Counter from "./part1/Counter";
import Clicker from "./part1/Clicker";
import Counterdouble from "./part1/Counterdouble";
import Feedback from "./part1/1.6/Feedback";
import Courses from "./part2/2.1/Courses";
import Note from "./part2/2.6/Note"
import PhoneBook from "./part2/2.1/PhoneBook";
import Countries from "./part2/2.18/Countries";

function App() {
  //Notes app
  const [counter, setCounter] = useState(0);

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  
  const addNote = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const handleNoteChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

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
    () => {setCounter(counter + 1)},
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
    <div className="container p-3 text-center">
    <h1>Notes</h1>
    <div>
      <button className="btn btn-outline-primary" onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all' }
      </button>
    </div>
    <ul className="list-group p-2">
      {notesToShow.map(note => 
        <Note key={note.id} note={note.content}/>
      )}
    </ul>

    <form onSubmit={addNote}>
      <input value={newNote}  onChange={handleNoteChange} />
      <button className="m-2 p-2 btn btn-primary" type="submit">Save</button>
    </form>   
  </div>

  <PhoneBook />
  <Countries />
  </>
}

export default App
