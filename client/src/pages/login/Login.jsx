import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className='loginInput' placeholder='Enter your email address...' />
        <label>Password</label>
        <input type="password" className='loginInput' placeholder='Enter your password...' />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to='/register' className='link'>REGISTER</Link>
      </button>
    </div>
  )
}

export default Login 