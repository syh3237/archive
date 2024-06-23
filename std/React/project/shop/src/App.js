import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail.js';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">CJONSTYLE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link onClick={()=> {navigate('/detail')}}>Cart</Nav.Link>
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
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
            </>
            } />
          <Route path='/detail' element={ <Detail shoes={shoes}/> } />

          <Route path='/about' element={ <About/> }>
            <Route path='member' element={ <div>멤버</div> } />
            <Route path='location' element={ <div>위치 정보</div> } />
          </Route>

          <Route path='/event' element={ <Event/> }>
            <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
            <Route path='two' element={<p>생일기념 쿠폰 받기</p>}/>
          </Route>
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
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%" />
      <h3 className="tit">{props.shoes.title}</h3>
      <p className="desc">{props.shoes.price}</p>
    </div>
  )
}

export default App;
