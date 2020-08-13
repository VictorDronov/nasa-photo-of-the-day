import React, { useState, useEffect } from "react";
import axios from 'axios'

function Arrows(props){
const { setNasaData } = props



    const Arrow = ({ direction, clickFunction, glyph }) => (
        <div
          className={ `slide-arrow ${direction}` }
          onClick={ clickFunction }>
          { glyph }
        </div>
      )
      let today = new Date()

      let dateOf = 'date='+today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+(today.getDate()-1);//This needs to change wont work with double diget months. //or more than one day back
      
      
      let forward = 'date='+today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+((today.getDate()+1-1)) //This needs to change wont work completly 
      
        const letPreviousDayBe = (event) => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=82gkLHZFaIjC60DIBHyY4wasGeLvAoOUh4EQB8t7&${dateOf}`)
      .then((nasaData)=>{
        setNasaData(nasaData.data)//Why is this not counted as a function am i passing it in incorrectly?
      })
      .catch((error)=>{
        console.log(error)
      })
      }
      const letNextDayBe = (event) => {
          axios.get(`https://api.nasa.gov/planetary/apod?api_key=82gkLHZFaIjC60DIBHyY4wasGeLvAoOUh4EQB8t7&${forward}`)
          .then((nasaData)=>{
            setNasaData(nasaData.data)//Why is this not counted as a function am i passing it in incorrectly?
          })
          .catch((error)=>{
            console.log(error)
          })
          }

    return(
        <div>
            <span>
                <Arrow direction='left'  clickFunction={letPreviousDayBe} glyph="&#9664;"/>
                Previous Day:
                <Arrow direction='right' clickFunction={letNextDayBe} glyph="&#9654;"/>
                Next Day
            </span>
        </div>
    )
}

export default Arrows;