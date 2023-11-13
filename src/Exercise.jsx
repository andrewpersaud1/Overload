import React from "react"

export default function Exercise(props){
    
    return(
        <div className="block-container">
            <div className="block">
            <h1 className="block-title">Title: {props.item.title}</h1>
            <img src={`./images/${props.item.coverImg}`} width="100px" className="block-image"/>
          <div className="block-stats">
                <h2>Description: {props.item.description}</h2>
                <h2>muscles used:{props.item.stats.targetmuscle}</h2>
                <h2>difficulty: {props.item.stats.difficulty}</h2>
                <h2>Risk: {props.item.stats.Risk}</h2>
            </div>
          </div>
        </div>
    )
}