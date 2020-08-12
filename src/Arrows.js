import React, { useState, useEffect } from "react";
import axios from 'axios'

function Arrows(){

    const Arrow = ({ direction, clickFunction, glyph }) => (
        <div
          className={ `slide-arrow ${direction}` }
          onClick={ clickFunction }>
          { glyph }
        </div>
      )


    return(
        <div className='carousel'>

                <Arrow direction='left' onClick={this.previousSlide}/>
                
                <Arrow direction='right'onClick={this.nextSlide}/>

        </div>
    )
}

export default Arrows;