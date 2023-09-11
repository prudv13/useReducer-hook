import React, { useReducer } from 'react'

const initialState = {count: 0, step: 1};

function reducer(state, action) {
  console.log(state, action);
  switch(action.type) {
    case 'inc':
      return {...state, count: state.count + state.step};
    case 'dec':
      return {...state, count: state.count - state.step};
    case 'setCount':
      return {...state, count: action.payload};
    case 'setStep':
      return {...state, step: action.payload};
    case 'reset':
      return initialState;
    default:
      throw new Error("Unknown Action");
  }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {count, step} = state;

  // date object mutation
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({type: 'dec'});
  }
  
  const inc = function () {
    dispatch({type: 'inc'})
  };

  const defineCount = function (e) {
    dispatch({type: "setCount", payload: Number(e.target.value)});
  };

  const defineStep = function (e) {
    dispatch({type: "setStep", payload: Number(e.target.value)});
  };

  const reset = function () {
    dispatch({type: "reset"});
  };

  return (
    <div className='d-flex flex-column align-items-center gap-4'>
      <h2>Date Counter</h2>

      <div className=''>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div className='d-flex gap-3'>
        <button className='btn btn-dark' onClick={dec}>-</button>
        <input className='form-control' value={count} onChange={defineCount} />
        <button className='btn btn-dark' onClick={inc}>+</button>
      </div>

      <p className='btn btn-outline-dark p-3'>{date.toDateString()}</p>

      <div>
        <button className='btn btn-dark' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter;