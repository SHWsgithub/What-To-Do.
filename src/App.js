import './App.css';
import Opening from './pages/Opening';
import Naming from './pages/Naming';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [isName, setIsName] = useState(() => JSON.parse(window.localStorage.getItem("isName")) || false)
  const [name, setName] = useState(() => JSON.parse(window.localStorage.getItem("name")) || '')

  useEffect(()=> {
      window.localStorage.setItem("name", JSON.stringify(name));
      window.localStorage.setItem("isName", JSON.stringify(isName));
    }, [name, isName] )


  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route 
            path='/' 
            element= {<Opening />}
            />
          <Route 
            path='/main' 
            element= {
              isName ? 
              (<Main name={name}/>) 
              : (<Naming name={name} setName={setName} setIsName={setIsName}/>)
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// const Container = styled('div')`
//   height: 844px;
//   width: 390px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// <Container>
//   <div>
//     <h1>WHAT TO DO.</h1>
//     <span>일정관리.<br/>해야 할 일을<br/>한 눈에.</span>
//   </div>
//   <p>클릭하여 관리 시작</p>
// </Container>