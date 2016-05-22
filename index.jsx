// require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
import React from 'react'
import ReactDOM from 'react-dom'
import {Control} from './lib/control'
import {MeetTable} from './lib/MeetTable'
import {WorkTable} from './lib/WorkTable'

export class App extends React.Component {
  render () {
    return (
    <div>
			<Control />
			<br />
			<br />
			<MeetTable />
			<br />
			<br />
			<WorkTable />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#myApp'))
