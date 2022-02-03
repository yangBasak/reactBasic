import React, { useState } from 'react'
import './App.css';
import Nav from './component/nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ width: "500px" }}>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
