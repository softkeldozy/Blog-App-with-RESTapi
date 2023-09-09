import { useEffect, useState } from 'react'
import './sidebar.css';
import axios from 'axios';

function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    }
    getCats();
  }, [])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          About The Author
        </span>
        <img src="./images/team-v1-5.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto, nulla dolorum odio dolorem
          iure laborum veritatis aliquid reiciendis quisquam vel et suscipit a
          lias iste magnam pariatur ab hic Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {/* Fetching posts according to Categories from database */}
          {cats.map((cat) => (
            <li className="sidebarListItem">{cat.name}</li>
          ))};
        </ul>
        {/* End of fectch */}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-facebook-f"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
          <i className="sidebarIcon fa-brands fa-discord"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar