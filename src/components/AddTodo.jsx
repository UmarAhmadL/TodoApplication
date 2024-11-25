import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../store/features/todoSlice'

function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <>
        <div className='mt-5 p-5 bg-white space-x-2  rounded-2xl'>
            <form 
                onSubmit={addTodoHandler}
                className='flex justify-center items-center'
            >
                <input 
                    type="text"
                    className='w-3/4 p-2 border-2 border-black text-center text-black text-sm font-bold rounded-l-md'
                    value={input}
                    placeholder='enter a todo....'
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button 
                className='p-2 px-4 text-center border-2 border-black bg-black text-white text-sm font-bold rounded-r-md hover:bg-orange-600'
                type='submit'>
                    Add
                </button>
            </form>  
        </div>
        
    </>
  )
}

export default AddTodo