
interface Props{
    counter: number;
}
function Counter({counter}:Props) {
  return <> 
        <p className="container-fluid bg-warning text-center p-3 h5 text-body-light">
            You looked at me {counter} times
        </p> 
    </>
}

export default Counter