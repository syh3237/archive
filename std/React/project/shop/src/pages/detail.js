import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Detail(props) {

    useEffect(()=>{
        console.log('HI')
    })

    let [count, setCount] = useState(0)
    
    let {id} = useParams();
    let 찾은상품 = props.shoes.find((x)=> x.id == id)

    return(
        <div className="container">
            <div className="alert alert-warning">2초이내 구매 시 할인</div>
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.cotent}</p>
                <p>{찾은상품.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
            </div>
        </div> 
    )
}

export default Detail;