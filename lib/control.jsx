import React from 'react'
import ReactDOM from 'react-dom'
import { task } from './data'

const Choose = () => (
  <form >
    {task.map(l => (
      <div>
        <input type="radio"  id={'task_'+l} value={l} name='task' />
        <label htmlFor={'task_'+l}>{l}</label>
      </div>
    ) )}
  </form>)

const InputList = () => (
  <div>
    <div>  รายชื่อ </div>
    <textarea type="text"  rows="4" cols="50" wrap="off" placeholder="add user list"/>
  </div>
)

const  InputSubmit = () => ( <button className="clouds-flat-button"> submit </button>)

const Control = () => (
  <div className="control">
    <div className="left">
      <Choose />
    </div>
    <div className="center">
      <InputList />
    </div>
    <div className="right">
      <InputSubmit />
    </div>
  </div>
)
export {Control}
