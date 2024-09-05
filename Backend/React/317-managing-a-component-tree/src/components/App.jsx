import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Heading from "./Heading";

function App() {
  const [inputText, setInputText] = useState(""); // this stores the users input.
  const [items, setItems] = useState([]); // this is the empty array to store the items.

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.trim() === "") {
      alert("Kindly add an activity!");
    } else {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  //function to delete Items on the ToDoItems
  function deleteTodo(id) {
    // console.log("This is item has been deleted!");
   setItems(prevItems => {
      return prevItems.filter((prevItem,index)=>{
        return index !== id;
      })
   })
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={handleChange} 
        type="text" 
        value={inputText}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            addItem();
          }
        }}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <h2>Items</h2>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index} // we pass in ke as a requirement for a map.
              id={index}
              text={todoItem}
              onChecked={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
