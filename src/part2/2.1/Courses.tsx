//Hacer el recorrido con un solo map

interface IProps {
  course : ICourse[];
  sum: number
}

export interface ICourse{
  name: string;
  id: number;
  parts: IPart[];
}
interface IPart{
  name: string;
  id: number;
  exercises: number;
}


function Courses({course,sum}: IProps) {
  return <>
      <h2>{course[0].name}</h2>

      {course[0].parts.map(part => {
        return <>
            {sum += part.exercises}
            <p key={part.id}>{part.name} course has {part.exercises} exercises</p>
        </>
      })}

      <h4>Total of exercises: {sum}</h4>
      <h3>{course[1].name}</h3>
      
      {course[1].parts.map(part => {
        return <p key={part.id}>{part.name} course has {part.exercises} exercises</p>
      })}
      
  </>
}

export default Courses