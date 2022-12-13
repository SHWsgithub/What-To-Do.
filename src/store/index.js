import  { createStore } from 'redux';
import { ADD_TODO, COMPLETE_TODO, UNCOMPLETE_TODO, DELETE_TODO, EDIT_TODO } from './actions';

const initialState = { personal: [], business: [] };

const todoReducer = (latestState = initialState, action) => {
    if (action.type === undefined) {
        return [];
    }

    if (action.type === ADD_TODO) {
        if(action.todo.category === 'Personal') {
            return { 
                ...latestState,
                personal: [...latestState.personal, {id: Math.random(), text: action.todo.text, category:action.todo.category, done: false}] 
            };
        }

        if(action.todo.category === 'Business') {
            return { 
                ...latestState,
                business: [...latestState.business, {id: Math.random(), text: action.todo.text, category:action.todo.category, done: false}] 
            };
        }
    }

    if (action.type === COMPLETE_TODO) {
        if(action.todo.todo.category === 'Personal') {
            return { 
                ...latestState,
                personal: latestState.personal.map((todo) => {
                    if (action.todo.todo.id) {
                        return {...todo, done: true};
                    }
                    return todo;
                }) 
            }
        }

        if(action.todo.todo.category === 'Business') {
            return { 
                ...latestState,
                business: latestState.business.map((todo) => {
                    if (action.todo.todo.id) {
                        return {...todo, done: true};
                    }
                    return todo;
                }) 
            }
        }
    }

    if (action.type === UNCOMPLETE_TODO) {
        if(action.todo.todo.category === 'Personal') {
            return { 
                ...latestState,
                personal: latestState.personal.map((todo) => {
                    if (action.todo.todo.id) {
                        return {...todo, done: false};
                    }
                    return todo;
                }) 
            }
        }

        if(action.todo.todo.category === 'Business') {
            return { 
                ...latestState,
                business: latestState.business.map((todo) => {
                    if (action.todo.todo.id) {
                        return {...todo, done: false};
                    }
                    return todo;
                }) 
            }
        }
    }

    if (action.type === DELETE_TODO) {
        if(action.todo.todo.category === 'Personal') {
            return { 
                ...latestState,
                personal: latestState.personal.filter(todo => {
                    return todo.id !== action.todo.todo.id
                }) 
            }
        }

        if(action.todo.todo.category === 'Business') {
            return { 
                ...latestState,
                business: latestState.business.filter(todo => {
                    return todo.id !== action.todo.todo.id
                }) 
            }
        }
    }

    if (action.type === EDIT_TODO) {
        if(action.todo.todo.category === 'Personal') {
            return { 
                ...latestState,
                personal: latestState.personal.map((todo) => {
                    if (action.todo.todo.id) {
                        return {...todo, text: action.text};
                    }
                    return todo;
                }) 
            }
        }

        if(action.todo.todo.category === 'Business') {
            return { 
                ...latestState,
                personal: latestState.personal.map((todo) => {
                    if (action.todo.todo.id) {
                        return {...todo, text: action.text};
                    }
                    return todo;
                }) 
            }
        }
    }

    return latestState;
};

const todoStore = createStore(todoReducer);

export default todoStore;