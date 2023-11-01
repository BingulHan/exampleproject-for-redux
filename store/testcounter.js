"use client";

import { store } from '@/store/teststore'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import React from 'react'

function TestCounter() {
  const [test, setTest] = useState("");
  const render = () => {
     setTest(store.getState());
  }

  
  useEffect(()=> {

    store.subscribe(render);
    render();

  })

  return (
     <div className='border-white	border-2'>

      {test}

     <br/>

     <button onClick={(e) => store.dispatch({type: 'INCREMENT'})}>Increment</button>
     <br/>

     <button onClick={(e) => store.dispatch({type: 'DECREMENT'})}>Decrement</button>

    </div>
  )
}

export default TestCounter