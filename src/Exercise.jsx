import React from "react"

export default function Exercise(props){
    
    return(
        <div className="block-container">
            
            <img src={`./images/${props.item.coverImg}`} width="100px" className="block-image"/>
            <h2 className="block-title">Title: {props.item.title}</h2>
                <h2>Description: {props.item.description}</h2>
                <h2>muscles used:{props.item.stats.targetmuscle}</h2>
                <h2>difficulty: {props.item.stats.difficulty}</h2>
                <h2>Risk: {props.item.stats.Risk}</h2>
            </div>
    )
}