import { useState } from 'react'

export function useLike(){
    let [like, setLike] = useState(0)
    function addLike(){
        setLike(a => a + 1)
    }
    // 변수 배출 (함수 외부에서 사용 가능)
    return [like, addLike];
}