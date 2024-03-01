import { useState,useEffect } from "react";
import axios from "axios"

interface IPhoneBook{
    id: string,
    name: string,
    number: string,
    important: boolean
}

type INewPhoneBook = Omit<IPhoneBook, "id">

function PhoneBook() {
    
    const [persons, setPersons] = useState<IPhoneBook[]>([]); 
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");
    const url = `http://localhost:3001/persons/`;


    useEffect(()=>{
        axios.get("http://localhost:3001/persons")
        .then(res => {
            setPersons(persons.concat(res.data));
        })
    },[])

    function postDataServer(phoneBookObj:INewPhoneBook) {
        axios
        .post('http://localhost:3001/persons', phoneBookObj)
        .then(response => {
            setPersons(persons.concat(response.data));
        })
    }

    function addPhoneBook(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    
        const phoneBookObj: INewPhoneBook = {
          name: newName,
          number: newNumber,
          important: Math.random() < 0.5
        }
        const isExist = persons.find((element) => element.name === newName || element.number === newNumber)
        if (!isExist){
          setPersons(persons.concat({ ...phoneBookObj, id: persons.length }));
          postDataServer(phoneBookObj);
          alertsTemplate("New user added successfully");
          setNewName("");
          setNewNumber("");
        }else{
          if (confirm(`You have already added this name"${newName}" or phone number "${newNumber}" to your phonebook, do you want to change the old number with the new one`)) {
            const personToChange = persons.find(p => p.id === isExist.id)
            const changedNumber = {...personToChange,number: newNumber};
            
            axios.put<IPhoneBook>(`${url}${personToChange?.id}`, changedNumber).then(response => {
              setPersons(persons.map(p => p.id !== personToChange?.id ? p : response.data));
              setNewName("");
              setNewNumber("");
            })
          }
        }
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


    
    function toggleImportance(id:string){
      const person = persons.find(p => p.id === id);
      const changedPerson = { ...person, important: !person?.important };
    
      axios.put(url + id, changedPerson).then(response => {
        setPersons(persons.map(p => p.id !== id ? p : response.data))
      })
    }

    function deletePhoneBook(id:string){
      const person = persons.find(p => p.id === id);

      if (confirm(`Do you want to delete ${person?.name}`)) {
        axios.delete(url + id).then(response => {
          alert(`Deleted user ${response.data.name}`);
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          alertsTemplate(`the user '${person?.name}' was already deleted from server\n${error}`);
        })
      }
    
    }

    function alertsTemplate(info:string) {
      return alert(info)
    }

    return <>

    <div className="container p-3 text-center">
      <h2>Phonebook</h2>
      <form onSubmit={Phonefilter} className="my-4">
        Filter: <input type="text" value={filter} onChange={handlePhoneFilterChange} placeholder="Insert a name"/> 
      </form>
      <div>
        {filteredPersons && <p key={filteredPersons.id}> {filteredPersons.name} {filteredPersons.number}</p>}
      </div>

      <h4>Add a new contact</h4>
      <form  onSubmit={addPhoneBook}>
          <div>
            <div className="m-2">
              Name: <input value={newName} placeholder ="Moe San" onChange={handlePhoneNameChange}/>
            </div>
            <div className="m-2">
              Number: <input type="tel" pattern="^[2-9]\d{2}-\d{3}-\d{4}$" placeholder="800-555-5555" value={newNumber} onChange={handlePhoneNumberChange}/>
            </div>
          </div>
        <div>
          <button className="m-2 p-2 btn btn-primary" type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div className="container d-flex justify-content-center aling-items-center">
        <ul className="list-group list-group-flush" key="fatherElement">
            {persons.map(person =>
                <li key={person.id} className="list-group-item">
                {person.name} {person.number}
                <button className = {person.important ? "m-1 btn btn-success" : "m-1 btn btn-danger"} onClick={() => toggleImportance(person.id)}>
                  {person.important ? "Make Not Important" : "Make Important"}
                </button>
                <button className = "m-1 btn btn-outline-primary" onClick={() => deletePhoneBook(person.id)}>
                  delete
                </button>
                </li>
            )}
        </ul>
      </div>
  </div>
  </>
}

export default PhoneBook