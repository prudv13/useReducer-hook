import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter/Counter';
import TodoApp from './components/TodoApp/TodoApp';
import BankAccount from './components/Bank Account/BankAccount';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}>
          <Route path='counter' element={<Counter />} />
          <Route path='todoapp' element={<TodoApp />} />
          <Route path='bankaccount' element={<BankAccount />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;