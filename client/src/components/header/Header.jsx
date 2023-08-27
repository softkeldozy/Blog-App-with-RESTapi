import './header.css'
function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
        <span className='headerTitlesSm'>React & Node</span>
        <span className='headerTitlesLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src='https://img.freepik.com/premium-vector/night-ocean-landscape-is-creative-modern-abstract-background-mountain_757954-83.jpg?w=2000'
        alt='' />
    </div>
  )
}

export default Header