import './App.css';
// import BoxList from './ColorBoxMaker/BoxList'
import TodoList from './TodoApp/TodoList'

function App() {
  return (
    <div className="bg-green-300 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <h2 className="mt-6 text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-800">
        Todo App
      </h2>        
      <TodoList />
      </div>
    </div>
  );
}

export default App;
