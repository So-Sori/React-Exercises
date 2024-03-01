import axios from "axios"
import { useState,useEffect } from "react"
import ErrorMessage  from "./ErrorMessage"

function Countries() {
    const [countrys,setCountrys] = useState({});
    const [inputValue,setInputValue] = useState('');
    const apiLink = "https://studies.cs.helsinki.fi/restcountries/api/all";

    useEffect(()=> {
        axios.get(apiLink + inputValue).then(response => {
            setCountrys(response.data)
            console.log(response.data);
        }).catch(err => <ErrorMessage error={err}/>)
    },[])

    function searchCountry(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }
  return <>
  <div className="container text-center m-2 p-2">
    <h3 className="p-2 fs-1">Country</h3>
    <form onSubmit={searchCountry}>
        <p className="fs-2">Find a country:</p><input className="px-3 rounded-pill" type="text" value={inputValue} onChange={handleInputChange}/>
    </form>
  </div>
  </>
}

export default Countries