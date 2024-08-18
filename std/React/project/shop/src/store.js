import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name: 'Son', age : 29 },
    reducers : {
        changeName(state){
            // return { name: 'Sonny', age : 29 }
            // 파라미터의 state = 기존 state
            state.name = 'Sonny'
            // immer.js 라이브러리로 인해 state 직접 변경 가능
        },
        // plusAge(state){
        //     state.age = state.age + 1
        // }
    }
})

export let { changeName } = user.actions

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        // plusAge(state){
        //     state.count = state.count + 1
        // },
        addCount(state, action){
            let idx = state.findIndex((a)=>{ return a.id === action.payload  })
            state[idx].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export let { addCount, addItem } = cart.actions



export default configureStore({
    reducer: { 
        user : user.reducer,
        cart : cart.reducer
    }
}) 

// redux 숙제