import React, { useState, useEffect } from "react";
import axios from 'axios'


function PhotoOfTheDay() {
    const [nasaData, setNasaData] = useState([])
    const [inputValue, setInputValue] = useState(``)


let changes = (input)=>{
    const { value } = input.target
    setInputValue(value)
}

let date = `date=${inputValue}`


let letDateBe = (event) =>{
    event.preventDefault()//This Stops the page from refreshing
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=82gkLHZFaIjC60DIBHyY4wasGeLvAoOUh4EQB8t7&${date}`)
    .then((nasaData)=>{
      setNasaData(nasaData.data)
    //   console.log(nasaData)
    })
    .catch((error)=>{
      console.log(error)
    })
};

  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=82gkLHZFaIjC60DIBHyY4wasGeLvAoOUh4EQB8t7&`)
    .then((nasaData)=>{
      setNasaData(nasaData.data)
    //   console.log(nasaData)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


  return (
    <div className="App">
      <h1>Nasa Photo Of The Day: {nasaData.title} </h1>

        <form><input type='numbers' placeholder='Enter Date: Like: 2000-02-14' value = {inputValue} onChange = {changes} /> <button onClick={(event) => letDateBe(event)} >Enter</button> </form>

      <img src={nasaData.url} alt="Comet Neowise over time and its tails direction with the date that it was taken!"/>
      <p><span>Copyright: {nasaData.copyright } </span><span>Date Taken: {nasaData.date}</span></p>
      <p> {nasaData.explanation}<br/><span role="img" aria-label='go!'>🚀</span>
      </p>

    </div>
  );
}

export default PhotoOfTheDay;
