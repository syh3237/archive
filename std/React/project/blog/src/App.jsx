/* eslint-disable */
// warning 메세지 제거 lint


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['게시글1', '게시글2', '게시글3']);
  let [mtitle, setMtitle] = useState(0)
  let [count,setCount] = useState(Array(title.length).fill(0));
  let [value, setValue] = useState('');
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div id="header">
        <h1>Blog</h1>
      </div>
      <main>
        <h2 className="blind">게시글 목록</h2>
        <ul className="lst_item">
          {
            title.map((a, i)=>{
              return(
                <li className="item" key={i}>
                  <span className="tit_area">
                    <h3 className='tit' onClick={()=>{
                      setModal(!modal);
                      setMtitle(i)
                    }}>{title[i]}</h3>
                    <span className="icon_like" onClick={()=>{
                      let copy = [...count];
                      copy[i] = copy[i] + 1
                      setCount(copy)
                    }}>💕<span className="count">{count[i]}</span></span>
                  </span>
                  <span className='info_area'>
                    <span className="user_id">Sonny</span>
                    <span className="date">12월10일</span>
                    <span className="view_count">0</span>
                  </span>
                  <button type='button' className="btn_delete">삭제</button>
                </li>
              )
            })
          }
        </ul>
        <div className="input_area">
          <input type="text" value={value} onChange={(e)=>{
            setValue(e.target.value);
          }}/>
          <button type='button' className="btn_submit" onClick={()=>{
            let copy = [...title];
            let copy2 = [...count];
            if(value !== ''){
              copy.unshift(value);
              copy2.unshift(0);
              setTitle(copy);
              setCount(copy2);
              setValue('');
            }
          }}>발행</button>
        </div>
        {
          modal ? <Modal title={title} mtitle={mtitle} color='skyblue'/> : null
        }
      </main>
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal" style={{background : props.color}}>
      <h3 className="tit">{props.title[props.mtitle]}</h3>
      <p className="desc">내용</p>
    </div>
  )
}

export default App;
