import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/** NewTodoForm - should render a form with one text input for the task to be created,
 *                 when submitted a new Todo component should be created
 * 
 * Props: addTodo - function that adds todo to list
 * 
 * State: { task }
 * 
 */

const NewTodoForm = ( {addTodo } ) => {

    const INITIAL_STATE = { task: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)   

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskId = uuid();
        addTodo({ taskId, task : formData.task, isCompleted : false})
        setFormData(INITIAL_STATE)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...formData, [name] : value}))
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="newTask" className="block font-semibold mb-2">
          New Task:
        </label>
        <input
          data-testid="task"
          id="task"
          name="task"
          placeholder="what to do? e.g. do laundry"
          value={formData.task}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2 transition duration-300 transform hover:scale-105"
        />
        <button
          data-testid="submitButton"
          className="px-4 py-2 bg-blue-500 text-white rounded transition duration-300 transform hover:scale-110"
        >
          Add
        </button>
      </form>
    )
}

export default NewTodoForm;