/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '타입스크립트','자바스크립트']);
  let [좋아요, change] = useState([0,0,0,0,0]);
  let [modal, setModal] = useState(false);
  // let copy = [...글제목];
  // copy[0] = '여자 코트 추천';
  // 글제목변경(copy);

  return (
    <div className="App">
      <div className='black-nav'>
        <h3>ReactBlog</h3>
      </div>
      {
        글제목.map((a, i)=> {
          return (
            <div className="list" key={i}>
              {/* <h4 onClick={ ()=> {setModal(!modal)}}>{ 글제목[i] }
                <span onClick={ ()=> {change(좋아요 + 1)}}>❤️</span>
                {좋아요[i]}
              </h4> */}
              <h4 onClick={()=> {
                setModal(!modal)
              }}>
                {글제목[i]}
                <span onClick={()=>{
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  change(copy)
                }}>❤️</span> {좋아요[i]}
              </h4>
              <p>6월 20일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal color={'aquamarine'} 글제목변경={글제목변경} 글제목={글제목}/> : null
      }

      {/* <button onClick= {()=> {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>제목 변경</button>
      <button onClick={ ()=> {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다 정렬</button> */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {
        
      }}>글 수정</button>
    </div>
  )
}

export default App;
