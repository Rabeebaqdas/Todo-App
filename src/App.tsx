import React,{useState} from 'react';
import {Task} from './services/type';
import TodoTask from './Components/TodoTask';
import './App.css';

const App:React.FC = () => {
  let [task,setTask] = useState<string>("");
  let [deadLine,setDeadLine] = useState<number>(1);
  let [todoList,setTodoList] = useState<Task[]>([]);

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name === "task"){
    setTask(event.target.value);
  }
  else{
    setDeadLine(Number(event.target.value));
  }
  }

  const addTask = ():void=>{
    let newTask = {taskName:task , deadline:deadLine};
    setTodoList([...todoList , newTask ]);
    setTask('');
    setDeadLine(1);


  }

  const completeTask = (deleteTask:string) : void =>{
      setTodoList(todoList.filter((data)=>{
         return data.taskName != deleteTask;
      }))
  }
  return (
    <div className="App">
      <div className="heading">
      <h1>Todo List</h1>
      </div>
    <div className="header">
      <div className="inputContainer">
      <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} required/>
      <input type="number" name="deadline" placeholder="Deadline" value={deadLine} onChange={handleChange} required/>
      </div>
      {(task == "")?<button onClick={addTask} disabled>Add Task</button>:<button onClick={addTask} >Add Task</button>}
    </div>
    <div className="todoList">
    {
      todoList.map((task:Task , key:number)=>{
        return<TodoTask key={key} task={task} completeTask={completeTask} />
      })
    }

    </div>
    </div>
  );
}

export default App;
