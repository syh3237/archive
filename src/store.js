import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: { name: 'Son', age: 30 },
    reducers: {
        // 파라미터 state = 기존 state
        changeName(state) {
            state.name = 'young hun'
        }
    }
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {
            id : 0,
            name : 'White and Black',
            count : 2
        },
        {
            id : 2,
            name : 'Grey Yordan',
            count : 1
        },
    ],
    reducers: {
        addCount(state, action) {
            let num = state.findIndex((el)=>{ return el === action.payload })
            state[num].count++
        }
    }
})

export let {changeName} = user.actions
export let {addCount} = cart.actions

export default configureStore({
    reducer: {
        cart : cart.reducer,
        user : user.reducer
    }
}) 