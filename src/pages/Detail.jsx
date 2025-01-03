import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export default function Detail(props) {
    const { id } = useParams();
    let [box, setBox] = useState(true);
    let [value, setValue] = useState('');
    let [tab, setTab] = useState(0);

    // // id를 숫자로 변환
    const numericId = parseInt(id, 10);
    let filter = props.shoes.find((x)=>{
        return x.id == id;
    })


    useEffect(()=>{
        const timer = setTimeout(() => {
            setBox(false);
        },2000);
        return () => { clearTimeout(timer); }
    }, [])

    useEffect(() => {
        if(isNaN(value)) {
            alert('숫자만 입력 가능합니다')
            setValue('')
        }
    }, [value])

    return (
        <div className="container">
            { box ? <Box>2초 내 구매 시 할인</Box> : null }
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${numericId + 1}.jpg`}
                        width="100%"
                    />
                </div>
                <div className="input_box">
                    <input type="text" value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{filter.title}</h4>
                    <p>{filter.content}</p>
                    <p>{filter.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant='tabs' defaultActiveKey='link0'>
                <Nav.Item>
                    <Nav.Link eventKey='link0' onClick={()=>{ setTab(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link1' onClick={()=>{ setTab(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link2' onClick={()=>{ setTab(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({tab}) {
    let [fade, setFade] = useState('');
    useEffect(()=>{
        const timer = setTimeout(()=>{ setFade('on') }, 100)
        return () => {
            clearTimeout(timer);
            setFade('')
        }
    }, [tab])
    return (
        <div className={`tab_wrap ${fade}`}>
            {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
        </div>
    )
}

const Box = styled.div`
    display:flex;align-items:center;justify-content:center;
    width:100%;height:50px;
    margin-top:10px;
    background:yellow;
    border-radius:10px;
    opacity:.2;
`