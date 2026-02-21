import { useState } from 'react';
import { Button } from './components/Button/Button.jsx';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const setCounterhandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <Button onClick={setCounterhandler}>count is {count}</Button>;
};
