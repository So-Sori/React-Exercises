interface Props{
    exercises: number;
}

function Courses({exercises}:Props) {
  return <>
    <p className="text-center h4">This course has {exercises} exercicies</p>
  </>
}

export default Courses