import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
// import { useState } from "react";

function App() {
  const [nasaData, setNasaData] = useState([])



  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=82gkLHZFaIjC60DIBHyY4wasGeLvAoOUh4EQB8t7')
    .then((nasaData)=>{
      setNasaData(nasaData.data)
      console.log(nasaData.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


  return (
    <div className="App">
      <h1>{nasaData.title}</h1>

      <img src={nasaData.url} alt="Comet Neowise over time and its tails direction with the date that it was taken!"/> {/* The img will allso be replaced just a placeholder */}
  <p><span>Copyright: {nasaData.copyright } </span><span>Date Taken: {nasaData.date}</span></p>
      <p> {nasaData.explanation}<span role="img" aria-label='go!'>🚀</span>
      </p>

    </div>
  );
}

export default App;
