import './App.css'
import Navbar from "./Navbar"
import Home from "./Home"
import Exercise from './Exercise.jsx'
import data from "./data.jsx"
import Table from "./Table.jsx"

function App() {
  const exercise = data.map(item => {
    return (
        <Exercise
            key={item.id}
            item={item}
        />
    )
})
  return(
    <div>
    <Navbar/>
    <Home/>
    {/* {exercise} */}
    <Table />
    </div>
  )
}

export default App
