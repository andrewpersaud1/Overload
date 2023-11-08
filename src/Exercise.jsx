import React from "react"
import benchpress from './images/benchpress.jpg'

export default function Exercise(){
    
    return(
        <div className="block">
            <h1>Title: </h1>
            <img src={benchpress} width="100px" className="block-image"/>
          <div className="block-stats">
                <h2>muscles used:</h2>\
                <h2>difficulty</h2>
          </div>
        </div>
    )
}