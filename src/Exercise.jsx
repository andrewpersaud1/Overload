import React from "react"
import benchpress from './images/benchpress.jpg'

export default function Exercise(props){
    
    return(
        <div className="block">
            <h1>Title: {props.item.title}</h1>
            <img src={`./images/${props.item.coverImg}`} width="100px" className="block-image"/>
          <div className="block-stats">
                <h2>Description: {props.item.description}</h2>
                <h2>muscles used:{props.item.stats.targetmuscle}</h2>
                <h2>difficulty: {props.item.stats.difficulty}</h2>
          </div>
        </div>
    )
}