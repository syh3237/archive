import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';

function App() {

  let [shoes, setShoes] = useState(data);
  let [click, setClick] = useState(0);
  let navigate = useNavigate();

  return (
    <div className="App">
      

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/about') }}>about</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} setShoes={setShoes} click={click} setClick={setClick} />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버</div>} />
          <Route path='location' element={<div>위치 정보</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>이벤트1</div>} />
          <Route path='two' element={<div>이벤트2</div>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='*' element={<div>NotFound</div>} />
      </Routes>
      
    </div>
  );
}

function Event() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet />
    </div>
  )
}

function About() {
  return (
    <div>
      <strong>회사 정보</strong>
      <Outlet></Outlet>
    </div>
  )
}

function Main(props) {
  const API_URL = [
    "https://codingapple1.github.io/shop/data2.json",
    "https://codingapple1.github.io/shop/data3.json",
  ]

  const handleButtonClick = () => {
    if(props.click < 2) {
      axios
      .get(API_URL[props.click])
      .then((result)=>{
        let copy = [...props.shoes, ...result.data];
        props.setShoes(copy);
        props.setClick((prev)=> prev + 1);
      })
      .catch((error)=>{
        console.error('실패')
      })
    } else {
      alert('상품 없음');
    }
  }

  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((shoe,index)=>{
              return(
                // map 함수로 리스트를 렌더링할 때, 고유한 key 속성을 제공하는 것이 필수
                <Card shoe={shoe} index={index} key={index}/>
              )
          })}
        </div>
      </div>
      <button onClick={() => { handleButtonClick(); }}>버튼</button>
    </>
  )
}

function Card(props){
  return (
    <Link to={`/detail/${props.index}`} className="col-md-4" style={{textDecoration:'none', color:'inherit'}}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`} width="80%" alt="" />
      <h3>{props.shoe.title}</h3>
      <p>{props.shoe.price}</p>
    </Link>
  )
}

export default App;
