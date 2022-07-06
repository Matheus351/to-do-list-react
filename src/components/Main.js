import './Main.css'
import React,{Component} from "react";
import {FaPlus} from 'react-icons/fa'

export default class Main extends Component{

    state = {
        newTask: '',
    }

  inputChange = (e)=>{
    this.setState({
        newTask:e.target.value
    })
  }

  render(){
    const {newTask} = this.state
    return (
        <div className="main">
            <h1>To-Do List</h1>

            <form className="form" action="#">
               <input onChange={this.inputChange} type="text" value={newTask}></input>
               <button type="submit">
                <FaPlus/>
               </button>
            </form>
        </div>
    )
  }
}