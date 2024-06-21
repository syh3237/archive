/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '타입스크립트','자바스크립트']);
  let [좋아요, change] = useState([0,0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
        <h3>ReactBlog</h3>
      </div>
      {
        글제목.map((a, i)=> {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=> {
                setModal(!modal)
                setTitle(i)
              }}>
                {글제목[i]}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  change(copy)
                }}>❤️</span> {좋아요[i]}
              </h4>
              <p>6월 20일 발행</p>
              <button className='btn_delete' onClick={()=> {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>Delete</button>
            </div>
          )
        })
      }

      <input onChange={(e)=> {
        입력값변경(e.target.value)
      }}/>
      <button onClick={(e)=> {
        // input 태그가 빈 값일 경우 리스트 추가 X
        let copy = [...글제목];
        if(!입력값 == '') {
          copy.unshift(입력값);
          글제목변경(copy);
        }
      }}>추가</button>

      {
        modal == true ? <Modal color={'aquamarine'} title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        {props.글제목변경(copy)}
      }}>글 수정</button>
    </div>
  )
}

export default App;
