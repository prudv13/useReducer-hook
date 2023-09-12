import React, { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state, action) => {
  if(!state.isActive && action.type !== "openAccount") return state;
  switch(action.type){
    case 'openAccount':
      return {
        ...state,
        balance: 500,
        isActive: true,
      }
    case 'deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      }
    case 'withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      }
    case 'requestLoan':
      if(state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      }
    case 'payLoan':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: initialState.loan,
      }
    case 'closeAccount':
      if(state.balance !== 0 || state.loan > 0) return state;
      return initialState;
    default:
      throw new Error("Error");
  }
}

const BankAccount = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const {balance, loan, isActive} = state;

  return (
    <div className="d-flex flex-column align-items-center gap-5">
      <h1>BANK ACCOUNT</h1>

      <div className="card p-3 col-md-4">
        <h4 className="form-control">Balance : {balance}</h4>
        <h4 className="form-control">Loan : {loan}</h4>
      </div>

      <div className="d-flex gap-3">
        <button 
          disabled={isActive} 
          onClick={() => dispatch({type: 'openAccount'})} 
          className="btn btn-primary"
        >
          Open Account
        </button>
        <button 
          disabled={!isActive} 
          onClick={() => dispatch({type: 'closeAccount'})} 
          className="btn btn-danger"
        >
          Close Account
        </button>
      </div>

      <div className="d-flex gap-2">
        <button
          disabled={!isActive}
          onClick={() => dispatch({type: 'deposit', payload: 150})}
          className="btn btn-outline-dark"
        >
          Deposit 150
        </button>
        <button
          disabled={!isActive}
          onClick={() => dispatch({type: 'withdraw', payload: 50})}
          className="btn btn-outline-dark"
        >
          Withdraw 50
        </button>
        <button
          disabled={!isActive}
          onClick={() => dispatch({type: 'requestLoan', payload: 5000})}
          className="btn btn-outline-dark"
        >
          Request a loan of 5000
        </button>
        <button
          disabled={!isActive}
          onClick={() => dispatch({type: 'payLoan'})}
          className="btn btn-outline-dark"
        >
          Pay loan
        </button>
      </div>
    </div>
  );
};

export default BankAccount;
