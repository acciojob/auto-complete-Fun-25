import React, { useState,useEffect} from "react";
import "./../styles/App.css";

fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [fruits,setFruits]=useState(fruits)

  useEffect(()=>{
    setFruits(fruits.filter(value=>value.toLowerCase.includes(searchTerm.toLowerCase)))
  },[search]

  )
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <ul>
        {
          fruits.map(fruit=>{
            <li>{fruit}</li>
          })
        }
      </ul>
       
    </div>
  );
};

export default App;
