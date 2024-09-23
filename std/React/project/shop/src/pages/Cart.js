import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
// import { changeName, plusAge } from "../store.js"
import { addCount } from "../store.js"
import { memo, useMemo, useState } from "react"

let Child = memo(function (){
    console.log('재랜더링')
    return <div>Child</div>
})

function Cart(){

    let state = useSelector((state)=> state )
    let dispatch = useDispatch()
    let [count,setCount] = useState(0)
    // redux4 3:19
    return(
        <div>
            <Child></Child>
            <button onClick={()=>{ setCount(count+1) }}>+</button>
            <h5>{state.user.name}의 장바구니</h5>
            {/* <button onClick={()=>{
                dispatch(plusAge())
            }}>button</button> */}
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                            <tr key={i}>
                                <td>1</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>안녕</td>
                                <td><button onClick={()=>{
                                    // dispatch(changeName())
                                    // dispatch(addCount(i))
                                    dispatch(addCount(state.cart[i].id))
                                }}>+</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart