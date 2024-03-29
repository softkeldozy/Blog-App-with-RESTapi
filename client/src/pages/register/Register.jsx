import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username, email, password,
      });
      // Redirect to login if data exists
      res.data && window.location.replace('/login')
    } catch (error) {
      setError(true);
    }


  }
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter your Username...' onChange={e => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" className='registerInput' placeholder='Enter your email address...' onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" className='registerInput' placeholder='Enter your password...' onChange={e => setPassword(e.target.value)} />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton" type='submit'>
        <Link to='/login' className='link'>Login</Link>
      </button>
      {error && <span className='err'>Something went wrong!!!</span>}
    </div>
  )
}

export default Register 