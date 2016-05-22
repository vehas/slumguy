import React from 'react'
import ReactDOM from 'react-dom'
import {task, humanName} from './data'
import {times} from 'lodash'
const WorkTable = () =>(
  <table className="work">
    <thead>
      <tr>
        <td>name</td>
      {task.map( t => (<td key={t}> {t} </td>) )}
      </tr>
    </thead>
    <tbody>

    { humanName.map(name => (
      <tr>
        <td>
          {name}

        </td>
        {times(task.length, () => (<td> </td>))}
      </tr>
    ))}
    </tbody>
  </table>
)

export { WorkTable }
