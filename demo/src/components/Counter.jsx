import { useState } from 'react';
import '../style.css';

const Counter = () => {

  const [count, setCount] = useState(0);

  return <div className='container'>
    <div>
      <h1 className='number'>{count}</h1>
    </div>

    <div className='btns-container'>
      <button className='increment' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='decrement' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
    
  </div>
}


export default Counter;