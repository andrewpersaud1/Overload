// // import React from "react"
// import {useTable} from 'react-table'
// import Home from "./Home"


// export default function Table(){


    
//     return(
//         <div>
//         <h1>hello</h1>
//         </div>
//     )
// }

import React, { useState } from 'react';

const EditableExerciseTable = () => {
  const [tableData, setTableData] = useState([
    { id: 1, day: 'Monday', exercise: 'Push-up', reps: 10, sets: 3, weight: 0 },
    { id: 2, day: 'Tuesday', exercise: 'Squats', reps: 12, sets: 4, weight: 20 },
    // Add more initial data as needed
  ]);

  const handleEdit = (id, field, value) => {
    setTableData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Day</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Weight Used</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td contentEditable onBlur={(e) => handleEdit(row.id, 'day', e.target.textContent)}>
                {row.day}
              </td>
              <td contentEditable onBlur={(e) => handleEdit(row.id, 'exercise', e.target.textContent)}>
                {row.exercise}
              </td>
              <td contentEditable onBlur={(e) => handleEdit(row.id, 'reps', e.target.textContent)}>
                {row.reps}
              </td>
              <td contentEditable onBlur={(e) => handleEdit(row.id, 'sets', e.target.textContent)}>
                {row.sets}
              </td>
              <td contentEditable onBlur={(e) => handleEdit(row.id, 'weight', e.target.textContent)}>
                {row.weight}
              </td>
              <td>
                <button onClick={() => console.log('Save functionality here')}>Save</button>
                <button onClick={() => console.log('Delete functionality here')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableExerciseTable;
