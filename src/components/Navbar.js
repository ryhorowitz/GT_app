import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className="site-title">
      <img className='logo' src='/img/GT-logo-light.png' alt='' />
      </Link>
      <ul>
          <Link to='/add-case'>Add Case</Link>
          <Link to='/search'>Search</Link>
      </ul>
    </nav>
  )
}

export default Navbar;
