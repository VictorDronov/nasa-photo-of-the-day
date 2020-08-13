import React from "react";

function Arrows(props){
const{ day, setDay } = props


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
            return setDay('date='+startDate.getFullYear()+'-0'+(startDate.getMonth()+1)+'-'+(startDate.getDate()+1-1))
        } 
    return setDay('date='+startDate.getFullYear()+'-0'+(startDate.getMonth()+1)+'-'+(startDate.getDate()-1));
}

    return(
        <div>
            <span>
                <Arrow direction='left'  clickFunction={()=>getMeDate()} glyph="&#9664;"/>
                Previous Day:
                <Arrow direction='right' clickFunction={()=>getMeDate('forward')} glyph="&#9654;"/>
                Next Day:
            </span>
        </div>
    )
}

export default Arrows;