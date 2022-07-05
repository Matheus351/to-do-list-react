import './Main.css'
import React,{Component} from "react";

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

            <form action="#">
               <input onChange={this.inputChange} type="text"></input>
               <button type="submit">Enviar</button>
            </form>
        </div>
    )
  }
}