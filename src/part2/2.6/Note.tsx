interface IProps{
  note: INotes[];
}
interface INotes{
  id: number;
  important: boolean;
  content: string;
}

function Note({note}:IProps) {
  return <>
      <li className="list-group-item">{note}</li>
  </>
}

export default Note