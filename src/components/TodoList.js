import { useState, useEffect } from 'react';
import styled from 'styled-components';
import todoStore from '../store';
import TodoItem from './TodoItem';

const Ul = styled.ul`
    list-style:none;
    padding-left:0px;
`
const StyledSection = styled.section`
    height: 20rem;
    width: 15rem;
`

const Span = styled.span`
    display: block;
    margin-top: 2.5em;
    margin-bottom: 1em;
    font-size: 18px;
`

function TodoList() {
    const [state, setState] = useState(todoStore.getState())

    useEffect(() => {
        const unsubscribe = todoStore.subscribe(() => {
            setState(todoStore.getState())
        });
        return () => {
            unsubscribe()
        }
    }, [])
    
    return (
        <StyledSection>
            <Span>Personal</Span>
            <Ul>
                {state.personal.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                })}
            </Ul>
            <Span>Business</Span>
            <Ul>
                {state.business.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                })}
            </Ul>
        </StyledSection>
    );
}

export default TodoList;