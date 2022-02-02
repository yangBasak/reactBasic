import React, { useState } from 'react'
import './App.css';
import Login from './pages/login/index.js'
import SomeList from './pages/someList/index.js'
import Nav from './component/nav';
// import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  return (

    <div style={{ width: "700px" }}>
      {/* <Nav /> */}

      {/* <Routes>
        <Route path="/">
          <h1>메인 홈</h1>
        </Route>
        <Route path="someList">
          <SomeList />
        </Route>
        <Route path="login">
          <Login />
        </Route>
      </Routes> */}
      <Login />
      <SomeList />

    </div >

  );
}

export default App;
