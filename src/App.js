import React from "react";
import "./App.css";
import {ApodList} from "./components/Apod/ApodList"

function App() {
  return (
    <div className="App">
      <ApodList />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket emoji">🚀</span>!
        
      </p>
    </div>
  );
}

export default App;
