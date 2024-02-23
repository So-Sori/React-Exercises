/* 
TODO:
    notes and setnotes states
    add notes function
    add notes form
    newnote and setnewnote state
    input with setnewnotes value
    onchange note function with setnewnote function
    input with onchange using onchange function
    showall and setshowall states
    
*/
interface IPhoneBook{
  name: string;
  number: string;
}

function Phonebook({name,number}:IPhoneBook) {
  return <>
      <li className="list-group-item">{name} {number}</li>
  </>
}

export default Phonebook