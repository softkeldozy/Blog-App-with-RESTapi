import './singlePost.css'

function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img
          className='singlePostImg'
          src='./images/blog-v1-7.jpg'
          alt='' />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Kelvin</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellendus h
          arum aperiam incidunt dicta quo vero est maxime, a fugiat illo soluta facere nu
          lla dolore aliquid voluptatibus quam accusantium sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Debitis in nulla ad et! Animi est alias quo praesentium dolore numquam saepe eaque, ipsum ex at reprehenderit, sapiente ad iure distinctio.
          Iste, nemo illum provident, minus architecto rerum, laboriosam natus ex sit tempora amet reiciendis unde! Excepturi
          recusandae officia ipsum expedita accusamus laudantium explicabo reprehenderit perferendis eaque incidunt, a at iure!
          Nemo, dignissimos facilis. Iusto ut tempora temporibus amet magni eligendi dolore, excepturi consequuntur accusamus
          praesentium. Placeat voluptate veniam corrupti sapiente sint molestias alias repellendus dolor aliquid, voluptatem cumque labore autem.</p>
      </div>
    </div>
  )
}

export default SinglePost