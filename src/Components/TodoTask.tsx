import {Props} from '../services/type';
const TodoTask = ({task,completeTask}:Props) => {
    return(
<div className="task">
    <div className="content">
  <span>{task.taskName}</span>
  <span>{task.deadline}</span>
    </div>
    <button onClick={()=>completeTask(task.taskName)}>X</button>
    </div>

    );
}

export default TodoTask;
