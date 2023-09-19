import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useState } from 'react';
import { Context } from '../../context/context';
import axios from 'axios';
function Settings() {
  const user = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user.user._id,
      username, email, password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; //with this duplicate imgages can be distinguished from each other
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/uploads', data);
      } catch (err) {

      }
      try {
        await axios.put('/users/' + user._id, updatedUser);
      } catch (err) {

      }
    }
  };
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleUpdate}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={user.profilePic} alt="" className="profilePicture" />
            <label htmlFor="fileInput"><i className="settingsPPIcon far fa-user-circle"></i></label>
            <input type="file" id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.value)} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <button className="settingsSubmit" type='submit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings