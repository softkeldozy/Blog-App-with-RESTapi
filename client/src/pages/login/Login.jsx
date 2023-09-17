import './login.css'
import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import { Context } from '../../context/context';
import axios from 'axios';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  // Calling Context
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    // Making API Call for Login authentication 
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      // if successful
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='loginInput' placeholder='Enter your Username...' ref={userRef} />
        <label>Password</label>
        <input type="password" className='loginInput' placeholder='Enter your Password...' ref={passwordRef} />
        <button className="loginButton" disabled={isFetching} type='submit'>Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to='/register' className='link'>REGISTER</Link>
      </button>
    </div>
  )
}

export default Login 