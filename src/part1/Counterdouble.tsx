import {useState} from 'react';

function Counterdouble() {
const [values,setValues] = useState({sum:0,rest : 0});

  return <>
    <button type= "button" className="btn bg-success" onClick={() => setValues({...values,sum: values.sum + 1})}>Positive Clicks</button>
    <div className="contianer-fluid p-2">
        {values.sum}
    </div> 

    <button type ="button" className="btn bg-danger" onClick={() => setValues({...values,rest: values.rest - 1})}>Negative Clicks</button>
    <div className="contianer-fluid p-2">
        {values.rest}
    </div> 
  </>
}

export default Counterdouble