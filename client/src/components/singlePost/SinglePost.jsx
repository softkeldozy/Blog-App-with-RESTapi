import { Link, useLocation } from 'react-router-dom'
import './singlePost.css'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import { Context } from '../../context/context';


function SinglePost() {
  const PF = 'http://localhost:5000/images/'

  // Getting the user for a post written
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState([]);
  const { user } = useContext(Context);
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updateMode, setUpdateMode] = useState(false)
  // Whenever this path changes fire this useEffect
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    fetchPost();
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/ ${post._id}`, { data: { username: user.username } });
      window.location.replace('/');
    } catch (err) {

    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, { username: user.username, title, desc });
      setUpdateMode(false)
    } catch (err) {

    }
  }
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {/* if any image exists */}
        {post.photo && (<img
          className='singlePostImg'
          src={PF + post.photo}
          alt='' />
        )}{updateMode ? <input type='text' value={title} className='singlePostTitleInput' autoFocus onChange={(e) => setTitle(e.target.value)} /> : (
          <h1 className="singlePostTitle">{title}
            {post.username === user?.username &&
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            }
          </h1>
        )}

        <div className="singlePostInfo">
          {/* Redirecting query and populating category search according to username */}
          <span className='singlePostAuthor'>
            Author:
            <Link to={`/?user=${post.username}`} className='link'>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (<textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)} />) : (<p className='singlePostDesc'>{desc}</p>)}
        {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
      </div>
    </div >
  )
}

export default SinglePost