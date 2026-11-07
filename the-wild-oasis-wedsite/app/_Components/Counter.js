"use client";

import { useState } from "react"

function Counter({users}) {
    const [count , setCount] = useState(0);
    function Increment() {
        setCount(c=>c+1)
    }
    return (
        <>
            <p>There is have {users.length} users</p>
            <button onClick={Increment}>{count}</button>
        </>
    )
}

export default Counter
