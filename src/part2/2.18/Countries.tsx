import axios from "axios"
import { useState,useEffect } from "react"
import ErrorMessage  from "./ErrorMessage"
/* TODO 
    *SHOW INFO ABOUT COUNTRY
        -NAME
        -AREA
        -CAPITAL
        -FLAG
        -LANGUAGES
*/

function Countries() {
    const [countrys,setCountrys] = useState([{}]);
    const [inputValue,setInputValue] = useState("");
    const [filterCountry,setfilterCountry] = useState([{}]);
    const apiLink = "https://studies.cs.helsinki.fi/restcountries/api/all";

    useEffect(()=> {
        axios.get(apiLink).then(response => {
            setCountrys(response.data)
        }).catch(err => <ErrorMessage error={err}/>)
    },[])

    function searchCountry(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        const mapCountry = countrys.map(country => country)
        setfilterCountry(mapCountry.filter(coun => coun.name.common.includes(inputValue)))        
    }
    function resultCountry() {
        console.log(filterCountry);
        console.log(filterCountry.length);
        
        if (filterCountry.length > 10) {
            return <div>Too many results, please be more specific</div>
        }
        else if(filterCountry.length === 1){
            return <div>Aceptable</div>
        }
        else if(filterCountry.length > 1 && filterCountry.length <= 10){
            // return <div>OK than</div>
            filterCountry.map(country => {return country.name})
        }
        else{
            return <div>Search a country</div>
        }
    }
  return <>
  <div className="container text-center m-2 p-2">
    <h3 className="p-2 fs-1">Country</h3>
    <form onSubmit={searchCountry}>
        <p className="fs-2">Find a country:</p><input className="px-3 rounded-pill" type="text" value={inputValue} onChange={handleInputChange}/>
    </form>
    <div className="container">
        {resultCountry()}
    </div>
  </div>
  </>
}

export default Countries