interface IProps{
    error: string;
}


function ErrorMessage({error}:IProps) {
  return <>
    <div className="container alert alert-danger">
        {error}
    </div>
  </>
}

export default ErrorMessage