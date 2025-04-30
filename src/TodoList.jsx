import React from 'react'
import {useState} from 'react'


let TodoList = function (){
let [task, setTask] = useState("")
let [taskArr, setTaskArr] = useState([])

function addTask(){
if(task){
	setTaskArr(t=>[...t,task])
	setTask("")

	}
	return;
}


function deleteTask(index){

let updatedTaskArr = taskArr.filter((el, i)=>{
	return i !== index
})

setTaskArr(updatedTaskArr)
	
}


return(
<div id="todolist-container">
	<h1>Todo-list</h1>
	<div id="input-div">
	<input id="input-box" onChange={
	(event)=>{
	setTask(event.target.value)
	}
	} value={task} placeholder="Enter your todo..."/>

	<button id="add-btn" onClick={addTask}>Add</button>
	</div>
	<ul id="list-items">

	{taskArr.map((element, index)=>{
	return <li key={index}>{element}<button id="delete-btn" onClick={()=>{
	return deleteTask(index)
	}}>Delete</button></li>
	})}

	</ul>

</div>
	)
}



export default TodoList