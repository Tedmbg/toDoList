import React, { useState } from "react";

// function ToDoItem(props){
//     // variable to track user change
//     const [done,setDone] = useState(false); // we padd bool not string.

//     function onDone(){
//         setDone(prevValue => !prevValue);
//     }
//  return(
//         <>
//          <li onClick={onDone} style = {{textDecoration:done ? "line-through" :"none"}} >{props.text}</li>
//         </>
//     )
// }

// export default ToDoItem;

// the above was passinga line throught the function

function ToDoItem(props) {
  return (
    <div onClick={()=>{
      props.onChecked(props.id)
    }}>
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoItem;
