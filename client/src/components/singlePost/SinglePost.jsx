import { Link, useLocation } from 'react-router-dom'
import './singlePost.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

function SinglePost() {
  // Getting the user for a post written
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState([]);
  // Whenever this path changes fire this useEffect
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
    }
    fetchPost();
  }, [path])


  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {/* if any image exists */}
        {post.photo && (<img
          className='singlePostImg'
          src={post.photo}
          alt='' />
        )}
        <h1 className="singlePostTitle">{post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
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
        <p className='singlePostDesc'>{post.desc}</p>
      </div>
    </div >
  )
}

export default SinglePost