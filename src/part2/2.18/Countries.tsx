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
interface IProps{
    languagesArray: string[];
}
interface IApiresult{
    name: {
        common: string;
    };
    area: number;
    capital: string[];
    flags: {
        alt:string;
        svg:string;
    };
    languages: {}

}

function Countries({languagesArray}:IProps) {
    const [countries,setCountries] = useState<IApiresult[]>([]);
    const [inputValue,setInputValue] = useState("");
    const [filterCountry,setfilterCountry] = useState<IApiresult[]>([]);
    const apiLink = "https://studies.cs.helsinki.fi/restcountries/api/all";
    

    useEffect(()=> {
        axios.get(apiLink).then(response => {
            setCountries(response.data)
        }).catch(err => <ErrorMessage error={err}/>)
    },[])

    function searchCountry(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        setfilterCountry(countries.filter(country => country.name.common.includes(inputValue)))        
    }
    function resultCountry() {
        if (filterCountry.length > 10) {
            return <div>Too many results, please be more specific</div>
        }
        else if(filterCountry.length === 1 && Object.keys(filterCountry[0]).length !== 0){
            languagesArray = Object.values(filterCountry[0].languages)

            return <>
                <div>
                    <h2>{filterCountry[0].name.common}</h2>
                    <div className="fs-5">Capital {filterCountry[0].capital}</div>
                    <div className="fs-5">Area {filterCountry[0].area}</div>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            {languagesArray?.map((lang,index) => (<li key={index}>{lang}</li>))}
                        </ul>
                    </div>
                    <img className="img-thumbnail rounded flout-start" src={filterCountry[0].flags.svg} alt={filterCountry[0].flags.alt} title={filterCountry[0].flags.alt} />
                </div>
            </>
        }
        else if(filterCountry.length > 1 && filterCountry.length <= 10){
            return <>
                {filterCountry.map((country) => {return <div>{country.name.common}</div>})}
            </>
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