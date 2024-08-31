import { useState } from 'react'

function App(){

  const [tasks,setTasks] = useState([]);
  const[newTask,setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value); // this function will help us to see the text when we type in the input box
  }

  function addTask(){
    if(newTask.trim() !== ""){
      setTasks(t => [...t,newTask]);
      setNewTask("");
  }
  }

  function deleteTask(index){
      const updatedTasks = tasks.filter((_,i) => i !== index);
      setTasks(updatedTasks);
  }

  function moveTaskUp(index){
      if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
      }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (

    <div className='outerdiv'>
      <div className='innerdiv'>
      <h1 >Todoist</h1>
      <div>
        <input type='text'
        placeholder='Add a task...'
        value =  {newTask}
        onChange = {handleInputChange} />
        <button 
        className='add-button'
        onClick={addTask}
        >Add</button>
      </div>
      <ol>
        {tasks.map((task,index) => 
        <li key = {index}>
        <span className='text'>{task}</span>
        <button
        className='delete-button'
        onClick={() => deleteTask(index)}
        >Delete</button>
        <button
        className='move-button'
        onClick={() => moveTaskUp(index)}
        >Move up</button>
        <button
        className='move-button'
        onClick={() => moveTaskDown(index)}
        >Move down</button>
        </li>
        )}

      </ol>
      </div>
    </div>
  );
  
}
export default App