import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
// import { changeName, plusAge } from "../store.js"
import { addCount } from "../store.js"

function Cart(){

    let state = useSelector((state)=> state )
    let dispatch = useDispatch()
    // redux4 3:19
    return(
        <div>
            {/* <h5>{state.user.name}의 {state.user.age}장바구니</h5> */}
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