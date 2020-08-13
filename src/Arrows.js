import React, { useState, useEffect } from "react";
import axios from 'axios'

function Arrows(props){
const { setNasaData } = props
const [day, setDay] = useState(1)


    const Arrow = ({ direction, clickFunction, glyph }) => (
        <div
          className={ `slide-arrow ${direction}` }
          onClick={ clickFunction }>
          { glyph }
        </div>
      )


    let startDate = new Date()// This give the current Date

const getMeDate = (direction)=>{
        if(direction === 'forward'){
            return 'date='+startDate.getFullYear()+'-0'+(startDate.getMonth()+1)+'-'+((startDate.getDate()+day-1))
        } 
    return 'date='+startDate.getFullYear()+'-0'/*<--This is a problem right here*/+(startDate.getMonth()+1)+'-'+(startDate.getDate()-day);
}

const change = (back) =>{
    if(back==='back'){
        return (event) => {
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=n4z0eQp21OR5mlZa5L9d6vewzCnazllNDPZdmd2I&${getMeDate()}`)
            .then((nasaData)=>{
                setNasaData(nasaData.data)
                setDay(day+1)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
    return (event) => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=n4z0eQp21OR5mlZa5L9d6vewzCnazllNDPZdmd2I&${getMeDate('forward')}`)
        .then((nasaData)=>{
            setNasaData(nasaData.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

// const letPreviousDayBe = (event) => {
//     axios.get(`https://api.nasa.gov/planetary/apod?api_key=n4z0eQp21OR5mlZa5L9d6vewzCnazllNDPZdmd2I&${getMeDate()}`)
//     .then((nasaData)=>{
//         setNasaData(nasaData.data)
//         setDay(day+1)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }

// const letNextDayBe = (event) => {
//     axios.get(`https://api.nasa.gov/planetary/apod?api_key=n4z0eQp21OR5mlZa5L9d6vewzCnazllNDPZdmd2I&${getMeDate('forward')}`)
//     .then((nasaData)=>{
//         setNasaData(nasaData.data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }

    return(
        <div>
            <span>
                <Arrow direction='left'  clickFunction={change('back')} glyph="&#9664;"/>
                Previous Day:
                <Arrow direction='right' clickFunction={change()} glyph="&#9654;"/>
                Next Day
            </span>
        </div>
    )
}

export default Arrows;