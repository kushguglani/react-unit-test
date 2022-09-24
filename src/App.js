import './App.css';
import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);
  const delayCount = () =>
		setTimeout(() => {
			setCounter(counter + 1);
		}, 500);

  const name="Kush Guglani"
  return (
    <section className="myapp">
    <div>
      <h1>Hi Hello react {name} </h1>
    </div>
    <div>
      <h1>Welcome to unit test case </h1>
      <p>we learn snapshot component </p>
    </div>
    <div>
      <button onClick={()=>setCounter(counter+1)} data-testid='button-up' >Increment</button>
      <button onClick={()=>setCounter(counter-1)} data-testid='button-down' >Decrement</button>

      <button onClick={delayCount} data-testid='button-up-inc' >Increment After 5 sec</button>

      <p data-testid="counter">{counter}</p>
    </div>
    </section>
  );
}

export default App;
