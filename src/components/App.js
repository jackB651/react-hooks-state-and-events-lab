import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [state, setState] = useState(true)
  // this will be used for the Dark Mode Toggle feature
  const appClass = state ? "App dark" : "App light"
  const appMode = state ? "Dark Mode" : "Light Mode"
  
  function click (){
    setState(state=>!state)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {click}>{appMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
