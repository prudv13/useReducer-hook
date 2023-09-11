import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Routing from './Routing/Routing';

const Home = () => {
  return (
    <div className='d-flex flex-column gap-3'>
        <Navbar />
        <Routing />

    <main className='p-3'>
        <Outlet />
    </main>
    </div>
  )
}

export default Home;