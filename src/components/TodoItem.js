import { useState } from 'react';
import styled from 'styled-components';
import todoStore from '../store';
import { uncompleteTodo , completeTodo, deleteTodo, editTodo } from '../store/actions';

const StlyedLi = styled.li`
    width: 100rem;
`

const TodoItem = (props) => {
    const [todoText, setTodoText] = useState(props.todo.text)
    const [isEdit, setIsEdit] = useState(false)

    const onDoneCompleteHandler = () => {
        todoStore.dispatch(completeTodo(props));
    }

    const onDoneUncompleteChangeHandler = () => {
        todoStore.dispatch(uncompleteTodo(props));
    }

    const onDeleteTodoHandler = () => {
        todoStore.dispatch(deleteTodo(props));
    }

    const onEditTodoHandler = () => {
        todoStore.dispatch(editTodo(props, todoText));
        setIsEdit(!isEdit)
    }

    return ( 
        <StlyedLi>
            {props.todo.done 
            ? <button onClick={() => onDoneUncompleteChangeHandler()}>v</button>
            : <button onClick={() => onDoneCompleteHandler()}>x</button>}
            {isEdit ?
            <input type='text' value={todoText} onChange={e => setTodoText(e.target.value)}/> :
            <span>{todoText}</span>
            }
            {isEdit 
            ? <button  onClick={() => onEditTodoHandler()}>완료</button>
            : <button onClick={() => setIsEdit(!isEdit)}>수정</button>}
            <button onClick={() => onDeleteTodoHandler()}>삭제</button>
        </StlyedLi>
    )
}

export default TodoItem; 