import logo from './logo.svg';
import './App.css';
import {useDebugValue, useState, useEffect} from 'react';
import axios from 'axios';





function App() {

  const [title, newtitle] = useState();
  const [code, newcode] = useState();
  const [Units, SetUnits] = useState([
   
  
  ])
  
  const hook = () => {
console.log("effect")
axios.get("/api/units").then(response => {
console.log(response.data);
SetUnits(response.data);
})

  }
 
 

  const formsubmit = (event) => {
    event.preventDefault()
    console.log('Form has been submitted')
    const unitobject = {"id": 7, title: title, "code": code, offering: "S1"}
    axios.post("/api/units", unitobject).then(response => {

    SetUnits([...Units, response.data])
    })
   

    }
      
    const handleTitleAdd = (event) => {
 
  newtitle(event.target.value)
  
    
    }

    const handleCodeAdd = (event) => {
 
      newcode(event.target.value)
      
      }

    
useEffect(hook,[])
  const unitdisplay = Units.map(value => <li key={value.id}> {value.code} {value.title} <br></br> Offering: S1 <button onClick={() => deleter(value.id)}>Click</button></li>)
  console.log(unitdisplay);

  const deleter = (id) => {
    axios.delete('/api/units/' + id).then(
    response => {

      console.log(response.data);
    }
   
    )

  }
  return (
  <div className="App">
    
     <header className="App-header">
        <p>COMP3120: Advanced Web development</p>
        <form onSubmit={formsubmit}>
        <input value={title} onChange={handleTitleAdd}/>
        <input value={code} onChange={handleCodeAdd}/>
        <button type="submit">Add unit</button>
      </form>
       
        <p>{unitdisplay}</p>
      </header>
     
      </div>
    
  );
}







const Unit = (props) => {
  const [title, setTitle] = useState(props.title);
  const [unitcode, setUnitcode] = useState(props.code);
  const [offering, setOffering] = useState(props.offering)
 
return (
 <div>
 <p> {unitcode}: {title} <br></br> Offering: {offering}  </p>

 </div>
)
}

export default App;