import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src="./images/team-v1-5.jpg" alt="" className="profilePicture" />
            <label htmlFor="fileInput"><i className="settingsPPIcon far fa-user-circle"></i></label>
            <input type="file" id='fileInput' />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Kelvin' />
          <label htmlFor="">Email</label>
          <input type="email" placeholder='info@mail.com' />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings