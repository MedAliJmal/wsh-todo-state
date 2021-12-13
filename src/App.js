import React, { Component } from 'react'
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';
import "./App.css"

export class App extends Component {
  state={
    todos:[
      {
        id:Math.random(),
        task:"Learn HTML and CSS",
        isDone:true
      },
      {
        id:Math.random(),
        task:"Learn javascript",
        isDone:true
      },
      {
        id:Math.random(),
        task:"Learn Redux",
        isDone:false
      }
    
    ]
  }
  handleComplete = (idTask) => {
    this.setState({ todos:this.state.todos.map(elt => elt.id===idTask ? {...elt,isDone:!elt.isDone} : elt )  });
 }
  handleDelete = (idTask) =>{
    this.setState({ todos: this.state.todos.filter(elt => elt.id!==idTask) });
  }
  handleAdd = (newTask) =>{
    if(newTask){
      this.setState({ todos: [...this.state.todos,{id:Math.random(),task:newTask,isDone:false}] });
    }
    else{
      alert('please enter task')
    }
  }
  render() {
    return (
      <div className="app">
        <h1>TODO APP</h1>
       <AddTask  handleAdd={this.handleAdd}/> 
      <TaskList list={this.state.todos}
      handleComplete={this.handleComplete}
      handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App
