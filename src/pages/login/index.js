import React, { useState } from 'react'

function Login() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    alert('OK')

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder='id' value={id} onChange={(e) => { setId(e.target.value) }}></input>
        <input placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
        <button type='submit'>로그인</button>
      </form>

    </div>
  );
}

export default Login;
