import NewTodoForm from "./NewTodoForm";
import { useState } from 'react';
import Todo from './Todo';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


/** TodoList - renders the NewTodoForm and the list of Todo Components
 * 
 * Props:
 * 
 * State:  [all todos]
 * 
 */

const TodoList = ()=> {    

    /** set initial state to an empty array */
    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.taskId !== todoId))
    }

    const editTodo = (todoId, updatedTask) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if (todo.taskId === todoId) {
                    return { ...todo, task: updatedTask };
                }
                return todo;
            })
        ));
    };

    const markAsCompleted = (todoId) => {
        setTodos((prevTodos)=> (
            prevTodos.map((todo) => {
                if (todo.taskId === todoId) {
                    return {...todo, isCompleted: true}
                }
                return todo;
            })
        ))
    }

    const markAsNotCompleted = (todoId) => {
        setTodos((prevTodos)=> (
            prevTodos.map((todo) => {
                if (todo.taskId === todoId) {
                    return {...todo, isCompleted: false}
                }
                return todo;
            })
        ))
    }

    return (
        <div className="max-w-md mx-auto mt-8">
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                key={todo.taskId}
                task={todo.task}
                isCompleted={todo.isCompleted}
                removeTodo={() => removeTodo(todo.taskId)}
                editTodo={(updatedTask) => editTodo(todo.taskId, updatedTask)}
                markAsCompleted={() => markAsCompleted(todo.taskId)}
                markAsNotCompleted={() => markAsNotCompleted(todo.taskId)}
                />
            ))}
        </div>
        
    )
}

export default TodoList;