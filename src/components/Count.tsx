import React, { useState } from 'react'

const Count: React.FC = () => {

  const [count, setCount] = useState<number> (0) 

  const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1)
    console.log(e);
    
  }

  const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count - 1)
    console.log(e);
    
  }

  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0)
    console.log(e);
    
  }

  const multiply = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count * 2)
    console.log(e);
    
  }
  return (
    <div className='m-5'>
      <p>Count: {count}</p>
      <button className='pr-4' onClick={increment}>Increase</button>
      <button className='pr-4' onClick={decrement}>Decrease</button>
      <button className='pr-4' onClick={reset}>Reset</button>
      <button onClick={multiply}>Multiply</button>
    </div>
  )
}

export default Count