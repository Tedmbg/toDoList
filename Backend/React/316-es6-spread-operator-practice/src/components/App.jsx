import React, { useState } from "react";

function App() {
  //create a state object variable
  const [toDo, setToDo] = useState("");

  //create an array
  const [toDos, setToDos] = useState([]);


  // create function to listen for use input
  function handleInput(event) {
    const {value, name} = event.target;
    setToDo(value);
    console.log(toDo);    
  }

  //handle to function to add the todos
  function handleClick(){
      if(toDo.trim() === ''){
        alert('😊 Kindly add an Item.');
      }else{
        setToDos(prevValues =>[
          ...prevValues,toDo
        ])
      }
      setToDo(""); // clears the input field
  }
  console.log(toDos);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text"  value={toDo}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDos.length === 0 ? (<li>Add item</li>):
          (toDos.map(toDo => (<li>{toDo}</li>)))}
        </ul>
      </div>
    </div>
  );
}

export default App;
