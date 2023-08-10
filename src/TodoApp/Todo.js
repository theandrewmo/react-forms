import { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';


/** Todo - should display a div with the task of the todo,
 *         there should also be a button with the text 'X' that removes the todo when clicked
 * 
 * Props: {taskId, task, isCompleted}
 * 
 * State: editing, updated
 * 
 */

const Todo = ( {task, isCompleted, removeTodo, editTodo, markAsCompleted, markAsNotCompleted}) => {
    const [editing, setEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);
   
    const handleEditClick = () => {
        setEditing(true)
    }

    const handleSaveClick = (e) => {
        e.preventDefault();
        editTodo(updatedTask)
        setEditing(false)
    }

    const handleInputChange = (e) => {
        setUpdatedTask(e.target.value)
    }

    const handleRemoveClick = () => {
        removeTodo();
    }

    const handleMarkAsCompletedClick = () => {
        markAsCompleted();
    }

    const handleMarkAsNotCompletedClick = () => {
        markAsNotCompleted();
    }

    return (
        <div data-testid='todo' className="bg-white shadow-lg rounded-lg p-4 mb-4 transition duration-300 transform hover:scale-105 relative">
        {editing ? (
          <div>
            <form onSubmit={handleSaveClick}>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={updatedTask}
                onChange={handleInputChange}
              />
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            </form>
          </div>
        ) : (
            <div className="col-span-2 flex items-center justify-between">
            <button
              className={`text-lg font-semibold mb-2 transition duration-300 transform hover:scale-110 ${isCompleted ? 'line-through' : ''}`}
              onClick={isCompleted ? handleMarkAsNotCompletedClick : handleMarkAsCompletedClick}
            >
              {task}
            </button>
            <div>
              <button
                className="p-2 mr-2 text-white bg-yellow-500 rounded-full transition duration-300 transform hover:scale-110"
                onClick={handleEditClick}
              >
                <FaEdit />
              </button>
              <button
                className="p-2 text-white bg-red-400 rounded-full transition duration-300 transform hover:scale-110"
                onClick={handleRemoveClick}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

export default Todo;