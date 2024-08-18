import './App.css';
import { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js'
import axios from 'axios'
import Cart from './pages/Cart.js'
import { useQuery } from 'react-query'
// react-query 3:30

export let Context1 = createContext()

function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify( [] ))
  },[])


  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate();

  useQuery()


  return (
    <div className="App">
      <Navbar bg='light' variant="light">
          <Container>
            <Navbar.Brand href="#home">CJONSTYLE</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link onClick={()=> {navigate('/cart')}}>Cart</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>반가워요 Son</Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {
                    shoes.map((a, i)=> {
                      return(
                        <Card shoes={shoes[i]} i={i}></Card>
                      )
                    })
                  }
                </div>
              </div>
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{ 
                  let copy = [...shoes, ...result.data];
                  setShoes(copy)
                })
                .catch(()=>{
                  console.log('실패')
                })
              }}>더보기</button>
            </>
            } />
          <Route path='/detail/:id' element={
            <Context1.Provider value={{재고, shoes}}>
              <Detail shoes={shoes}/>
            </Context1.Provider>
            } />

          <Route path='/about' element={ <About/> }>
            <Route path='member' element={ <div>멤버</div> } />
            <Route path='location' element={ <div>위치 정보</div> } />
          </Route>

          <Route path='/event' element={ <Event/> }>
            <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
            <Route path='two' element={<p>생일기념 쿠폰 받기</p>}/>
          </Route>

          <Route path='/cart' element={ <Cart/> } />
        </Routes>
    </div>
  );
}

function Event(){
  return(
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return(
    <div>
      <h3>회사 정보</h3>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <a href={"detail/"+(props.i)}><img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%" /></a>
      <h3 className="tit">{props.shoes.title}</h3>
      <p className="desc">{props.shoes.price}</p>
    </div>
  )
}

export default App;
