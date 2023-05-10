import "./TodoList.css";
import { useState } from "react";
import { Text, Field, Button, ListItem } from "./../components";
import locales from "./../locales/pt-br.json";

export const TodoList = () => {
  const [id, setId] = useState(2)
  const [taskLabel, setTaskLabel] = useState("");
  const [taskToEdit, setTaskToEdit] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Titulo da Tarefa No useState",
      tags: [
        { type: "important", label: "Importante" },
        { type: "urgent", label: "Urgente" },
      ],
    },
  ]);

  const addTask = () => {

    if (!taskLabel) {
      alert('Preencha o campo')
    }
    if (isEdit) {
      setTasks(oldArray => {
        const index = oldArray.findIndex(t => t.id === taskToEdit.id)
        oldArray[index] = {
          ...taskToEdit,
          title: taskLabel
        }
        console.log(oldArray);
        return oldArray
      })
      setTaskLabel('')
      setIsEdit(false)
      setTaskToEdit({})
      return
    }
    setTasks(oldArray => [...oldArray, { id: id, title: taskLabel }])
    setId(id + 1)
    setTaskLabel('')
  };

  const editTask = (taskId) => {
    const task = tasks.find(t => t.id === taskId)
    setTaskToEdit(task)
    setTaskLabel(task.title)
    setIsEdit(true)
  }

  const deleteTask = (taskId) => {
    const result = window.confirm('Deseja apagar?')
    console.log(result);
    if(result) {
      setTasks(oldArray => {
        const index = oldArray.findIndex(t => t.id === taskId)
        oldArray.splice(index,1)
        return oldArray
      })
    }
  }

  return (
    <>
      <Text value={locales.pageTitle} classCss={"title"} />
      <div className="container">
        <Field
          label={"Titulo Tarefa"}
          classCss={"text-field"}
          value={taskLabel}
          handleOnChange={(event) => setTaskLabel(event.target.value)}
        />
        <Button text={"OK"} classCss={"button-ok"} handleClick={addTask} />
      </div>

      <div className="container">
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            title={task.title}
            tags={task.tags}
            handleDelete={() => deleteTask(task.id)}
            handleEdit={() => editTask(task.id)}
          />
        ))}
      </div>
    </>
  );
};
