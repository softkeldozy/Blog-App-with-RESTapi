import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useState } from 'react';
import { Context } from '../../context/context';
import axios from 'axios';
function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const PF = 'http://localhost:5000/images/'

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SUCCESS' });
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
        const res = await axios.put(`/users/${user._id} `, updatedUser);
        dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
      } catch (err) {
        dispatch({ type: 'UPDATE_FAILURE' })
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
            {/* if there is a file create a url forit else profile picture */}
            <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" className="profilePicture" />
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