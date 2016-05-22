import React from 'react'
import ReactDOM from 'react-dom'
import {human, humanName} from './data'
import {times} from 'lodash'
const MeetTable = () =>(
  <table  className="meet">
    <thead>
      <tr>
        <td>name </td>
        {humanName.map( name => (<td key={name}> {name} </td>) )}
      </tr>
    </thead>
    <tbody>
      { humanName.map(name => (
        <tr>
          <td key={name}>
            {name}
          </td>
          {times(humanName.length, () => (<td> </td>))}
        </tr>
      ))}
      </tbody>
  </table>
)
export { MeetTable }
