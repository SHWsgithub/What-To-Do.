import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Title = styled.span`
    display: inline-block;
    font-family: 'AppleGothic';
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 30px;
`
const Subtitle = styled.span`
    font-family: 'AppleGothic';
    font-size: 40px;
    color: ${(props) => props.gray ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 1)"};
`

function Opening() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate('/main')
        }, 1500)
    }, [])

    return (
        <Container>
            <div>
                <Title>WHAT TO DO.</Title><br/>
                <Subtitle>일정관리.</Subtitle><br/>
                <Subtitle gray>해야 할 일을<br />한 눈에.</Subtitle>
            </div>
        </Container>
    );
}

export default Opening