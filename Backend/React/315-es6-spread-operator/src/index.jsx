import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App/>
    </>
)

const citrus = ['lime','Lemon',"orange"];
const fruits = ["Banana","Apple","Melon",...citrus];

console.log(...citrus);


console.log(fruits); // [ "Banana", "Apple", "Melon", "lime", "Lemon", "orange"]


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
