import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { addItem } from "../store.js";
// import { Tab } from "react-bootstrap";
import {Context1} from './../App.js'
import { useDispatch } from "react-redux";
import { useLike } from "../hooks/like.js";
import axios from "axios";


function Detail(props) {
    let {재고} = useContext(Context1)

    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [tab, setTab] = useState(0)
    let dispatch = useDispatch()
    // let [num, setNum] = useState('')

    useEffect(()=>{
        let a = setTimeout(()=>{setTimeout(()=>{ setAlert(false) },2000)})
        return ()=>{
            clearTimeout(a)
        }
    }, [])


    // useParams : 유저가 URL파라미터에 입력한 값 가져오기
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x=> x.id == id);

    // 1. 누가 Detail 페이지에 접속하면
    useEffect(()=>{
        // 2. 그 페이지에 보이는 상품 id를 가져와서 
        // 3. localStrorage에 watched 항목에 추가
        console.log(찾은상품.id)
        let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)
        꺼낸거.push(찾은상품.id)
        꺼낸거 = new Set(꺼낸거)
        꺼낸거 = Array.from(꺼낸거)
        localStorage.setItem('watched',JSON.stringify(꺼낸거))
    }, [])

    let [like, addLike] = useLike()

    axios.get('/username.json')

    return(
        <div className="container">
            {
                alert == true
                ? 
                <div className="alert alert-warning">2초이내 구매 시 할인</div>
                : null
            }
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            {/* <input onChange={ (e)=> {setNum(e.target.value)} } /> */}
            <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                {like} <span onClick={()=>{ addLike() }}>♥</span>
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}원</p>
                <button className="btn btn-danger" onClick={()=>{
                    dispatch(addItem( {id : 3, name : 'Nike', count : 5} ))
                }}>주문하기</button> 
            </div>
            </div>
            {재고}
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div> 
    )
}
function TabContent({tab}){
    // if(tab == 0){
    //     return <div>내용0</div>
    // }
    // if(tab == 1){
    //     return <div>내용1</div>
    // }
    // if(tab == 2){
    //     return <div>내용2</div>
    // }
    let [fade, setFade] = useState('');
    useEffect(()=>{
        setTimeout(()=>{setFade('end')}, 100)
        return ()=>{
            setFade('')
        }
    },[tab])
    return (<div className={`start ${fade}`}> 
        {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
    </div>)
}

export default Detail