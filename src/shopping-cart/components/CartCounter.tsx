'use client';

import { useAppSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { decrement, increment, resetCount, initCounterState } from '../../store/counter/counterSlice'
import { useEffect } from 'react';

interface Props {
    value?: number;
}

export interface CounterResponse {
    count: number;
}


const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter')
        .then(res => res.json());
    console.log(data)
    return data;
}


export const CartCounter = ({ value = 0 }: Props) => {
    const count = useAppSelector(state => state.counter.count);
    const dispatch = useDispatch();

    useEffect(() => {
        getApiCounter()
            .then( ({ count }) => dispatch( initCounterState(count) ) )
    }, [dispatch]);


    return (

        <>
            <span className="text-9xl"> {count} </span>
            <div>
                <button onClick={() => dispatch(increment())} className="bg-blue-500 text-white px-4 py-2 rounded-xl items-center justify-center hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
                <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white px-4 py-2 rounded-xl items-center justify-center hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
            </div>
        </>
    )
}
