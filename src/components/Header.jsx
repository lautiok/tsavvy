import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <div className='newsletter'>
      <Link to='/newletter'>Subscribe to the Newsletter</Link>
    </div>
    <header className='header'>
     <Link to='/'> <h1>TSavvy.</h1></Link>
            <nav className='nav'>
        <ul>

          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/society'>Society</Link>
          </li>
          <li>
            <Link to='/technology'>Technologies</Link>
          </li>
          <li>
            <Link to='/beauty'>Beauty</Link>
          </li>
          <li>
            <Link to='/travel'>Travel</Link>
          </li>
          <li>
            <Link to='/policy'>Politics</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}
