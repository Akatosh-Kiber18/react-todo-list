import React, {useState} from 'react';
import style from './NewTaskForm.module.css';

const NewTaskForm = ({listId, addTask}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setDescription] = useState('');
    const [taskDueDate, setDueDate] = useState('');

    const onAddTaskClick = () => {
        if (taskName.trim().length === 0) {
            alert("name??")
            return
        }

        addTask({
            done: false,
            name: taskName,
            dueDate: taskDueDate || null,
            description: taskDescription || null,
            listId: +listId
        });

        setTaskName('');
        setDueDate('');
        setDescription('');
    }

    function nameInput(event){
        setTaskName(event.target.value);
    }
    function descriptionInput(event){
        setDescription(event.target.value);
    }
    function dateInput(event){
        setDueDate(event.target.value);
    }

    return (
        <form className = {style.NewTaskForm}>
            <input className={style.input} type="text" value={taskName} onChange={nameInput} name="name" placeholder={'task name'} />
            <input className={style.input} type="text" value={taskDescription} onChange={descriptionInput} name="description" placeholder={'description'} />
            <input className={style.input} type="date" value={taskDueDate} onChange={dateInput} name="dueDate" placeholder={"date"} />
            <button className={style.button} type='button' onClick={onAddTaskClick}>Add task</button>
        </form>
    );
};

export default NewTaskForm;