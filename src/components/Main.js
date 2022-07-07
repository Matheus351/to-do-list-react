import './Main.css'
import React,{Component} from "react";
import Form from './Form'
import Tasks from './Tasks'
export default class Main extends Component{

    state = {
        newTask: '',
        tasks:[],
        index:-1
    }
 

  componentDidMount(){

    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if(!tasks) return

    this.setState({tasks})
  }
  
  
  componentDidUpdate(prevProps, prevState){

    const {tasks} = this.state

    if(tasks === prevState.tasks) return

    localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  inputChange = (e)=>{
    this.setState({
        newTask:e.target.value
    })
  }

  handleSubmit = (e)=>{
  
     e.preventDefault()
     const {tasks, index} = this.state
     let {newTask} = this.state
     newTask = newTask.trim()//eliminates white spaces

     if(tasks.indexOf(newTask)!==-1) return

     const newTasks = [...tasks]

     if(index===-1){
      this.setState({
        tasks:[...newTasks, newTask],
        newTask:'' //clear input
       })
     }else{
     
       newTasks[index] = newTask

       this.setState({
        tasks:[...newTasks],
        index:-1,
       })
     }

    
  }

  handleDelete = (e,index)=>{
     const {tasks} = this.state
     const newTasks = [...tasks]
     newTasks.splice(index,1)

     this.setState({
      tasks:[...newTasks]
     })
  }

  handleEdit = (e,index)=>{
    const {tasks} = this.state


    this.setState({
      index:index,
      newTask:tasks[index]
    })
  }

  render(){
    const {newTask,tasks} = this.state
  
    return (
        <div className="main">
            <h1>To-Do List</h1>

           <Form
            handleSubmit = {this.handleSubmit}
            inputChange = {this.inputChange}
            newTask = {newTask}
           />
           
           <Tasks
            handleEdit = {this.handleEdit}
            handleSubmit = {this.handleDelete}
            tasks = {tasks}
           />
        </div>
    ) 
  }
}