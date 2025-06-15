import React from 'react'
import { Outlet } from '@tanstack/react-router';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  )
}

export default App;