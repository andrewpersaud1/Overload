import React from "react"
import Table from "./Table";


export default function Home(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date()
    let day = days[d.getDay()]

    return(
        <div className="day-of-week">
        <h1>Today is {day}!</h1>
        {/* <Table /> */}
       
        </div>
        
    )
}