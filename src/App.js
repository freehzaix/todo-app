import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import ButtonFleche from './components/ButtonFleche';
import Question from './components/Question';

function App() {
  const [count, setCount] = useState(1);
  let a = Math.floor((Math.random() * 10) + 1);
  let b = Math.floor((Math.random() * 11) + 1);
  let reponse = a * b;

  function increment() {
    if (count < 100) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className='py-10 px-10 text-lg'>
        <Question count={count} a={a} b={b} reponse={reponse} />
        <br />
        <ProgressBar count={count} />
        <br />
        <ButtonFleche action={decrement} direction="M13 5H1m0 0L5 1m-4 4L5 9" />
        <ButtonFleche action={increment} direction="M1 5h12m0 0L9 1m4 4L9 9" />
      </div>
    </>
  );
}

export default App;