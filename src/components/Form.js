import { useState } from 'react';
import Button from '../UI/Button';
import Section from '../UI/Section'
import todoStore from '../store';
import { addTodo } from '../store/actions'
import styled from 'styled-components';

const StlyedForm = styled.form`
    margin-top: 50px;
    height: 15em;
`
const StlyedDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6em;
`

function Form() {
    const [todo, setTodo] = useState({
        text: '',
        category: '',
    })

    const onSetTodoTextHandler = (event) => {
        setTodo({
            ...todo,
            text: event.target.value
        });
    }

    const onSetTodoCategoryHandler = (event) => {
        setTodo({
            ...todo,
            category: event.target.value
        });
    }

    const onAddTodoHandler = (event) => {
        event.preventDefault();
        todoStore.dispatch(addTodo(todo));
        setTodo({
            text: '',
            category: '',
        });
    }

    return (
        <Section>
            <StlyedForm onSubmit={onAddTodoHandler}>
                <div>
                    <label htmlFor='todo-form' />
                    <input 
                        type='text' 
                        id='todo-form' 
                        name='todo-form'  
                        value={todo.text} 
                        placeholder='e.g. 강아지 산책 시키기'
                        onChange={(e) => onSetTodoTextHandler(e)}
                    />
                </div>
                <StlyedDiv>
                    <Button value={'Personal'} category={'Personal'} type={'button'} onClick={(e) => onSetTodoCategoryHandler(e)}/>
                    <Button value={'Business'} category={'Business'} type={'button'} onClick={(e) => onSetTodoCategoryHandler(e)}/>
                </StlyedDiv>
                <StlyedDiv>
                    <Button category={'저장하기'} type={'submit'} onSubmit={(e) => onAddTodoHandler(e)}/>
                </StlyedDiv>
            </StlyedForm>
        </Section>
    );
}

export default Form;