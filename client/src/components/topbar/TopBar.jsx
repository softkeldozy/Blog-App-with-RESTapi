import { Link } from 'react-router-dom'
import "./topbar.css"
import { useContext } from 'react';
import { Context } from '../../context/context';

function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };
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
          <li className="topListItem" onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (<Link to='/settings'><img className="topImg" src={user.profilePic} alt="" /></Link>
        ) : (
          //MULTIPLE COMPONENTS SHOULD ALWAYS BE WRAPPED INSIDE A FRAGMENT {<> </>}
          <ul className="topList">
            <li className="topListItem">
              <Link to='/login' className='link'>LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to='/register' className='link'>REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
export default TopBar