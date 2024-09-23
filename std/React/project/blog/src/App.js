/* eslint-disable */
// warning 메세지 제거 lint


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['JS','CSS','REACT'])
  let [like,setLike] = useState(Array(title.length).fill(0));
  let [modal, setModal] = useState(false);
  let [mtitle, setMtitle] = useState(0);
  let [data, setData] = useState('');
  let [date, setDate] = useState([{ m : 1 , d : 10 },{ m : 2 , d : 12 },{ m : 3 , d : 15 }]);

  return (
    <div className="App">
      <div className='black-nav'>
        <h3>ReactBlog</h3>
      </div>
        {
          title.map((a,i)=>{
            return(
              <div className="list" key={i}>
                <h4 onClick={ ()=>{
                  setModal(!modal)
                  setMtitle(i)
                  } }>{title[i]}
                  <span onClick={(e)=>{
                      e.stopPropagation();
                      let copy = [...like];
                      copy[i] = copy[i] + 1;
                      setLike(copy)
                    }
                  }>👌</span>{like[i]}
                </h4>
                <p>
                  {date[i].m}월 {date[i].d}일 발행
                </p>
                <button type='button' onClick={()=>{
                  let copy = [...title];
                  copy.splice(i, 1);
                  like.splice(i, 1);
                  setTitle(copy);
                }}>삭제</button>
              </div>
            )
          })
        }
        {
          modal == true ? <Modal color="orange" mtitle={mtitle} title={title} setTitle={setTitle}/> : null
        }
        <div className="input_box">
          <input type="text" onChange={(e)=>{
            setData(e.target.value)
          }} />
          <button onClick={()=>{
            let copy = [...title];
            copy.unshift(data);
            like.unshift(0);
            setLike(like);
            // 
            if(!data == ''){
              setTitle(copy);

              let now = new Date();
              let now_month = (now.getMonth() + 1).toString().padStart(2,'0');
              let now_date = now.getDate().toString().padStart(2,'0');
              // let copyMonth = [...month];
              let theDate = { m : now_month , d : now_date };
              let copyDate = [...date];

              copyDate.unshift(theDate);
              setDate(copyDate);
            }
          }}>발행</button>
        </div>
    </div>
  );
}

function Modal(props) {
  return (
        <div className="modal" style={{background : props.color}}>
          <h4>{ props.title[props.mtitle] }</h4>
          <p>날짜</p>
          <p>상세 내용</p>
          <button onClick={()=>{
            let copy = [...props.title];
            copy[0] = '겨울 롱패딩 추천';
            props.setTitle(copy);
          }}>1번 타이틀 수정</button>
        </div>
  )
}

export default App;
