import './post.css'

function Post() {
  return (
    <div className='post'>
      <img className="postImg" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eum impedit pariatur
        provident eos dolorem tenetur nam eaque numquam nihil sapiente amet commodi deleniti ad, obcaecati ut adipisci saepe delectus.</p>
    </div>
  )
}

export default Post 