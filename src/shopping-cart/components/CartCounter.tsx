'use client';

import React, { useState } from 'react'

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0}: Props) => {
    const [count, setCount] = useState(value);
    return (

        <>
            <span className="text-9xl"> {count} </span>
            <div>
                <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-xl items-center justify-center hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
                <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white px-4 py-2 rounded-xl items-center justify-center hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
            </div>    
        </>
    )
}
