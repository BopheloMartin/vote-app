import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {

  const [year, setYear] = useState('')

  const setValue =(e)=>{
    setYear(e.target.value)
  }

  const calculateYear =()=>{
    let age = 2022-year

    if(age>=18){
      alert("Can vote")
    }else{
      alert("Cannot vote")
    }
  }

  return (
    <div className="App">

    <input type="text" placeholder='Enter a year' onChange={(e)=>setValue(e)}></input>
    <button onClick={calculateYear}>Submit</button>
    
    </div>
  );
}

export default App;
