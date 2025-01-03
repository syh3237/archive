import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from './../store'

export default function Cart() {
    let cart = useSelector((state)=>{ return state })
    let dispatch = useDispatch();

    return (
        <div>
            <h3>{cart.user.name}의 장바구니</h3>
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
                    {cart.cart.map((el, index)=>{
                        return (
                            <tr key={index}>
                                <td>{cart.cart[index].id}</td>
                                <td>{cart.cart[index].name}</td>
                                <td>{cart.cart[index].count}</td>
                                <td><button onClick={()=>{ dispatch(addCount()) }}>+</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table> 
        </div>
    )
}
