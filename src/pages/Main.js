import styled from 'styled-components';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

const TodoMain = styled.main`
    position: relative;
    animation: fadeInUp 1s;
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
`

const Span = styled.span`
    display: block;
    margin-top: 2.5em;
    font-size: 32px;
`

function Main({name}) {
    return (
            <TodoMain>
                <Span>안녕하세요. {name}님.</Span>
                <Form name={name}/>
                <TodoList />
            </TodoMain>
    );
}

export default Main;