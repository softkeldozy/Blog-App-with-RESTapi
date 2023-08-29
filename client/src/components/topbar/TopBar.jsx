import { Link } from 'react-router-dom'
import "./topbar.css"

function TopBar() {
  const user = false
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        <i className="topIcon fa-brands fa-discord"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to='/' className='link'>HOME</Link>
          </li>
          <li className="topListItem">
            <Link to='/about' className='link'>ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to='/contact' className='link'>CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to='/write' className='link'>WRITE</Link>
          </li>
          <li className="topListItem">
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (<img className="topImg" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        ) : (
          //MULTIPLE COMPONENTS SHOULD ALWAYS BE WRAPPED INSIDE A FRAGMENT {<> </>}
          <ul>
            <li className="topList">
              <li className="topListItem">
                <Link to='/login' className='link'>LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link to='/register' className='link'>REGISTER</Link>
              </li>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
export default TopBar