import React, { useState } from 'react';

export default function Counter() {
       
        const [count,setCount] = useState(0);

        const inc=()=>{
                setCount(count+1)
        }
        const dec=()=>{
                setCount(count-1)
        }
        return (
                <center className="mt-10">
               <h1 className="text-5xl">Current Count value : {count}</h1>
               <button className='btn bg-yellow-200 m-10' onClick={inc}>Increment</button>
               <button className='btn bg-black m-10 text-white' onClick={dec}>Decrement</button>
               </center>
        )
}

