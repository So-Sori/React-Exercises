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
      <li>{note}</li>
  </>
}

export default Note