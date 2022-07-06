import './Main.css'
import React,{Component} from "react";
import {FaPlus,FaEdit,FaWindowClose} from 'react-icons/fa'

export default class Main extends Component{

    state = {
        newTask: '',
        tasks:[]
    }

  inputChange = (e)=>{
    this.setState({
        newTask:e.target.value
    })
  }

  handleSubmit = (e)=>{
    console.log('oi')
     e.preventDefault()
     const {tasks} = this.state
     let {newTask} = this.state
     newTask = newTask.trim()//eliminates white spaces

     if(tasks.indexOf(newTask)!==-1) return

     const newTasks = [...tasks]

     this.setState({
      tasks:[...newTasks, newTask],
     })
  }

  render(){
    const {newTask,tasks} = this.state
  
    return (
        <div className="main">
            <h1>To-Do List</h1>

            <form  onSubmit={this.handleSubmit} className="form" action="#">
               <input onChange={this.inputChange} type="text" value={newTask}></input>
               <button type="submit">
                <FaPlus/>
               </button>
            </form>
           
           <ul className='tasks'>
             {tasks.map(task=>(

              <li key={task}>
                {task}
                
                <div>
                  <FaEdit className='edit'/>
                  <FaWindowClose className='delete'/>
                </div>
                </li>

            ))}
           </ul>
        </div>
    ) 
  }
}