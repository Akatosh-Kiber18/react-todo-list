import React, {useState} from 'react';

const NewTaskForm = () => {
    const [name, setName] = useState('')
    return (
        <div className="NewTaskForm">
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit'>Add task</button>
        </div>
    );
};

export default NewTaskForm;