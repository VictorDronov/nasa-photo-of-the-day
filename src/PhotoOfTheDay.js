import React, { useState, useEffect } from "react";
import axios from 'axios'
import Arrows from './Arrows'

function PhotoOfTheDay() {
    const [nasaData, setNasaData] = useState([])
    const [inputDay, setInputDay] = useState(``)
    const [inputMonth, setInputMonth] = useState(``)
    const [inputYear, setInputYear] = useState(``)
    const [day, setDay] = useState(0)

let changeDay = (input)=>{
    const { value } = input.target
    setInputDay(value)
}
let changeMonth = (input)=>{
    const { value } = input.target
    setInputMonth(value)
}
let changeYear = (input)=>{
    const { value } = input.target
    setInputYear(value)
}
let date = `date=${inputYear}-${inputMonth}-${inputDay}`


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
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=n4z0eQp21OR5mlZa5L9d6vewzCnazllNDPZdmd2I&${day}`)
        .then((nasaData)=>{
            setNasaData(nasaData.data)
         })
    .catch((error)=>{
        console.log(error)
        })
},[day])

useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=n4z0eQp21OR5mlZa5L9d6vewzCnazllNDPZdmd2I&`)
    .then((nasaData)=>{
      setNasaData(nasaData.data)
    })
    .catch((error)=>{
      console.log(error)
    })
},[])

  return (
    <div className="App">
      <h1>Nasa Photo Of The Day: {nasaData.title} </h1>

        <form>
            <input type='text' placeholder='Year' value = {inputYear} onChange = {changeYear} />&nbsp;
            <input type='text' placeholder='Month' value = {inputMonth} onChange = {changeMonth} />&nbsp;
            <input type='numbers' placeholder='Day' value = {inputDay} onChange = {changeDay} /> &nbsp;
              
            <button onClick={(event) => letDateBe(event)} >Enter</button> </form>
            <Arrows setDay={setDay}  setNasaData={setNasaData}/>

      <img src={nasaData.url} alt=""/>


      <p><span>Copyright: {nasaData.copyright } </span><span>Date Taken: {nasaData.date}</span></p>
      <p> {nasaData.explanation}<br/><span role="img" aria-label='go!'>🚀</span>
      </p>

    </div>
  );
}

export default PhotoOfTheDay;
