import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Naming( {setName, name, setIsName} ) {

    function nameHandler(e) {
        setName(e.target.value);
    }

    function submitName(e) {
        if(e.key === 'Enter') {
            setIsName(true);
        }
    }

    return (
        <Container>
            <span className='decorateSpan'>이름을 알려주세요.</span>
            <input 
                type='text' 
                id='name'
                value={name}
                placeholder='이름을 입력해주세요.'
                onChange={(e)=>nameHandler(e)}
                onKeyUp={(e)=>submitName(e)}/>
            <span className='guideSpan'>입력 후 엔터를 눌러주세요 ⏎</span>
        </Container>
    );
}


export default Naming;