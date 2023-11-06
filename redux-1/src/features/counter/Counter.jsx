import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const resetAll = () => {
    console.log('reset');
    setAmount(0);
    dispatch(reset());
  };
  const handleAdd = (value) => {
    setAmount(0);
    dispatch(incrementByAmount(value));
  };

  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <label>Increase by amount: </label>
      <input
        type='number
      '
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => handleAdd(Number(amount))}>Add</button>
      <button onClick={() => resetAll()}>Reset all</button>
    </section>
  );
};
