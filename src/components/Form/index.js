import React from "react";
import {FaPlus} from 'react-icons/fa'
import './Form.css'


export default function Form(props){
    return(
        <form  onSubmit={props.handleSubmit} className="form" action="#">
        <input onChange={props.inputChange} type="text" value={props.newTask}></input>
        <button type="submit">
         <FaPlus/>
        </button>
        </form>
    )
}