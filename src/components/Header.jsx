import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    {/* <div className='newsletter'>
      <Link to='/newletter'>Subscribe to the Newsletter</Link>
    </div> */}
    <header className='header'>
     <Link to='/'> <h1>TSavvy.</h1></Link>
            <nav className='nav'>
        <ul>

          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/society'>Sociedad</Link>
          </li>
          <li>
            <Link to='/technology'>Tecnología</Link>
          </li>
          <li>
            <Link to='/beauty'>Belleza</Link>
          </li>
          <li>
            <Link to='/travel'>Viajes</Link>
          </li>
          <li>
            <Link to='/policy'>Política</Link>
          </li>
          <li>
            <Link to='/sport'>Deportes</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}
