import NewTodoForm from "./NewTodoForm";
import { useState } from 'react';
import Todo from './Todo';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


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

    const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
    
        const updatedTodos = [...todos];
        const [reorderedTodo] = updatedTodos.splice(result.source.index, 1);
        updatedTodos.splice(result.destination.index, 0, reorderedTodo);
    
        setTodos(updatedTodos);
      };
    
      return (
        <div className="max-w-md mx-auto mt-8">
          <NewTodoForm addTodo={addTodo} />
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todos" direction="vertical">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {todos.map((todo, index) => (
                    <Draggable key={todo.taskId} draggableId={todo.taskId} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Todo
                            task={todo.task}
                            isCompleted={todo.isCompleted}
                            removeTodo={() => removeTodo(todo.taskId)}
                            editTodo={(updatedTask) => editTodo(todo.taskId, updatedTask)}
                            markAsCompleted={() => markAsCompleted(todo.taskId)}
                            markAsNotCompleted={() => markAsNotCompleted(todo.taskId)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      );
}

export default TodoList;