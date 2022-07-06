import './Main.css'
import React,{Component} from "react";
import {FaPlus,FaEdit,FaWindowClose} from 'react-icons/fa'

export default class Main extends Component{

    state = {
        newTask: '',
        tasks:[
          'estudar react',
          'programar'
        ]
    }

  inputChange = (e)=>{
    this.setState({
        newTask:e.target.value
    })
  }

  render(){
    const {newTask,tasks} = this.state
    return (
        <div className="main">
            <h1>To-Do List</h1>

            <form className="form" action="#">
               <input onChange={this.inputChange} type="text" value={newTask}></input>
               <button type="submit">
                <FaPlus/>
               </button>
            </form>
           
           <ul className='tasks'>
             {tasks.map(task=>{
              return <li key={task}>
                {task}
                <div>
                  <FaEdit className='edit'/>
                  <FaWindowClose className='delete'/>
                </div>
                </li>
             })}
           </ul>
            
        </div>
    )
       
  }
}