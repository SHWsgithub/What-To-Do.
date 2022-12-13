import styled from 'styled-components';

const CategoryButton = styled.button`
    border: 0;
    outline: 0;
    background: white;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
    :active{
        color: rgb(0, 0, 0);
    }
    margin: 15px;
`

const Button = (props) => {
    return (
        <CategoryButton type={props.type} onClick={props.onClick} onSubmit={props.onSubmit} value={props.value}>
            {props.category}
        </CategoryButton>
    )
}

export default Button;