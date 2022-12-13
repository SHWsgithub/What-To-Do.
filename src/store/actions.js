export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const UNCOMPLETE_TODO = "UNCOMPLETE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const EDIT_TODO = "EDIT_TODO"

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    };
} 

export const completeTodo = (todo) => {
    return {
        type: COMPLETE_TODO,
        todo
    };
} 

export const uncompleteTodo = (todo) => {
    return {
        type: UNCOMPLETE_TODO,
        todo
    };
} 

export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        todo
    };
} 

export const editTodo = (todo, text) => {
    return {
        type: EDIT_TODO,
        todo,
        text
    };
} 