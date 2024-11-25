import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1,task:"welcome to 'ToDo Application!!'"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                task : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        editTodo:(state,action) => {
            const {id,task} = action.payload
            const todo = state.todos.find((todo) => todo.id == id)
            if(todo){
                todo.task = task
            }

        }
    }
    
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions

export default todoSlice.reducer