import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css';
function nav() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
      <ul style={{ display: "flex", padding: 0, margin: 0 }}>
        <li style={{ listStyle: "none", paddingRight: "20px" }}>
          <Link to="/">home</Link>
        </li>
        <li style={{ listStyle: "none", paddingRight: "20px" }}>
          <NavLink to="/someList"
            activeClassName="App-link">리스트</NavLink>
        </li>
      </ul>
      <div><Link to="/login">로그인</Link></div>
    </div>
  )
}

export default nav