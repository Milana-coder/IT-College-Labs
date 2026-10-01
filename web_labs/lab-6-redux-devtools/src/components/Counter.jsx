import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  reset,
} from '../store/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Redux Counter</h1>

      <div className="count">
        {count}
      </div>

      <div className="buttons">
        <button onClick={() => dispatch(decrement())}>
          −
        </button>

        <button onClick={() => dispatch(increment())}>
          +
        </button>

        <button onClick={() => dispatch(reset())}>
          Скинути
        </button>
      </div>
    </div>
  );
}

export default Counter;