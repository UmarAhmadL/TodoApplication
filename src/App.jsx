import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <div className=''>
        <div className='bg-white space-x-2 flex justify-center items-center rounded-2xl'>
          <img 
            src="TodoLogo.png" 
            alt="Todo Logo"
            className='h-20' 
          />
          <h1 className='text-black text-2xl font-Piedra'>Turning To-Dos into Dones</h1>
        </div>
      </div>
      <AddTodo/>
      <TodoList/>
      
    </>
  )
}

export default App
