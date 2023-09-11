import React from 'react'
import {Link} from 'react-router-dom';

const Routing = () => {
  return (
    <div className='m-3 p-2 d-flex gap-3 justify-content-center'>
    <Link to='counter'>
        <button className='btn btn-outline-dark'>counter</button>
    </Link>
    <Link to='bankaccount'>
        <button className='btn btn-outline-dark'>bank account</button>
    </Link>
    <Link to='todoapp'>
        <button className='btn btn-outline-dark'>todo app</button>
    </Link>
    </div>
  )
}

export default Routing;