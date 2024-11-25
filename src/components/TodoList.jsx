import React ,{useState }from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo , editTodo } from '../store/features/todoSlice'

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);

    const [isEditting,setIsEditting] = useState(null);
    const [editText,setEditText] = useState('');

    const handleEditTask = (taskId,task) => {
        setIsEditting(taskId);
        setEditText(task);
    }

    const saveEditedTaskHandler = (todoId) => {
        dispatch(editTodo({id: todoId,task: editText}));
        setIsEditting(null)
        setEditText('')
    }


  return (
    <>
        <ul className='font-Pangolin font-bold text-black grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
            {todos.map((todo) => (
                <li 
                    key={todo.id}
                    className='m-2 p-2 pl-4 bg-white/80 rounded-2xl flex items-center'
                >
                    {
                        isEditting == todo.id ?
                        (
                            <>
                                <input 
                                    type="text" 
                                    className='bg-transparent w-3/4 p-1 m-1'
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button 
                                    className='ml-auto'
                                    onClick={() => saveEditedTaskHandler(todo.id)}
                                >
                                    <img className='h-7' src="save.png" alt="Save" />
                                </button>
                            </>
                        ) : (
                            <>
                                <h3 className='m-1 w-4/5 text-left'>{todo.task}</h3>
                                <button 
                                    className='m-1 ml-auto' 
                                    onClick={() => handleEditTask(todo.id,todo.task)}
                                >
                                    <img className='h-7' src="edit.png" alt="Edit" />
                                </button>
                                <button 
                                    className='m-1' 
                                    onClick={() => dispatch(removeTodo({id: todo.id}))}
                                >
                                    <img className='h-7' src="delete.png" alt="Delete" />
                                </button>
                            </>
                        )}
                    
                </li>
            ))}
        </ul>
    
    </>
  )
}

export default TodoList