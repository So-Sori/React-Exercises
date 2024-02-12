
interface Props{
    header: string;
}

function Header({header}:Props) {
  return <>
    <div className="container text-center h1 p-2">{header}</div>

  </>
}

export default Header