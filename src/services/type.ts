export type Task = {
    taskName:string,
    deadline:number
}

export type Props={
    task : Task,
    completeTask(deleteTask:string):void;
}