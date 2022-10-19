import {createContext, useEffect, useState} from 'react'
import {tasks as data} from '../data/tasks'
export const TaskContent = createContext()

export function TaskContentProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTaks(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description:task.description
    }])
  }


  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
     }


  useEffect(()=>{
    setTasks(data)
  },[])

  return (
    <TaskContent.Provider value={{
      tasks,
      deleteTask,
      createTaks
    }}>
      {props.children}
    </TaskContent.Provider>
  )
}

export default TaskContent