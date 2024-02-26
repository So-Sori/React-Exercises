import { useState,useEffect } from "react";
import axios from "axios"


interface IPhoneBook{
    name: string,
    number: string
}

function PhoneBook() {
    
    const [persons, setPersons] = useState([{name: "Arto Hellas", number: "12345"}]); 
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3001/persons")
        .then(res => {
            setPersons(persons.concat(res.data));
        })
    },[])

    function addPhoneBook(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    
        const phoneBookObj: IPhoneBook = {
          name: newName,
          number: newNumber,
        }
        const isExist = persons.find((element) => element.name === newName || element.number === newNumber)
    
        if (!isExist){
          setPersons(persons.concat(phoneBookObj));
          setNewName("");
          setNewNumber("");
        }else{
          alert(`You probably have already add "${newName}" or phone number: "${newNumber}" to your phonebook`)
        }

        axios
        .post('http://localhost:3001/persons', phoneBookObj)
        .then(response => {
            setPersons(persons.concat(response.data));
        })
    }

    const handlePhoneNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
    }

    const handlePhoneNumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value);
    }

    const handlePhoneFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    }

    const Phonefilter = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    }
    const filteredPersons = filter ? persons.find((element) => element.name === filter) : persons

    let label;
    function toggleImportance(){
        label = persons.map(person => person.important)
        label  ? 'make not important' : 'make important';
    }
  return <>
      <div className="container p-3 text-center">
    <h2>Phonebook</h2>
    <form onSubmit={Phonefilter} className="my-4">
      Filter: <input type="text" value={filter} onChange={handlePhoneFilterChange} placeholder="Insert a name"/> 
    </form>
    <div>
      {filteredPersons && <p key={filteredPersons.number}> {filteredPersons.name} {filteredPersons.number}</p>}
    </div>

    <h4>Add a new contact</h4>
    <form  onSubmit={addPhoneBook}>
        <div>
          <div className="m-2">
            Name: <input value={newName} onChange={handlePhoneNameChange}/>
          </div>
          <div className="m-2">
            Number: <input type="tel" value={newNumber} onChange={handlePhoneNumberChange}/>
          </div>
        </div>
      <div>
        <button className="m-2 p-2 btn btn-primary" type="submit">Add</button>
      </div>
    </form>

    <h2>Numbers</h2>
    <div className="container d-flex justify-content-center aling-items-center">
      <ul className="list-group list-group-flush">
          {persons.map(person => <>
            <li key={person.number} className="list-group-item"> {person.name} {person.number}</li>
            <button onClick={toggleImportance}>{label}</button>
          </>
          )}
      </ul>
    </div>
  </div>
  </>
}

export default PhoneBook