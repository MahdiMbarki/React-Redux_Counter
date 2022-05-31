
import './App.css';
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
function App() {

  const title = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500
  })


  const [number, setNumber] = useState(0)

  const counter = useSelector((state) => state.counter);

  const { count } = useSpring({
    from: { count: 0 }, count: counter,
    delay: 200,
    config: config.molasses,
  })

  const dispatch = useDispatch();

  const Increment = () => {
    dispatch({ type: 'INC' })
  }

  const Decrement = () => {
    dispatch({ type: 'DEC' })
  }

  const Add = () => {
    dispatch({ type: 'Add', payload: Number(number) })
  }

  const Subtract = () => {
    dispatch({ type: 'Sub', payload: number })
  }

  return (
    <div >
      <animated.h1 style={title}>Counter App</animated.h1>
      <animated.h2 style={count}>{count.to(n => n.toFixed(2))}</animated.h2>
      <button onClick={Increment}>Increment by 1</button>
      <button onClick={Decrement}>Decrement By 1</button>
      <input
        type='number'
        placeholder='Enter a Number to inscrement or decrement the redux state by'
        onChange={e => setNumber(e.target.value)} />
      <button onClick={Add}>Increase Value By {number}</button>
      <button onClick={Subtract}>Decrement Value By {number}</button>
    </div>
  );
}

export default App;
