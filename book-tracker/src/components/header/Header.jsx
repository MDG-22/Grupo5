import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        
        <div className="logo">
            <span>img</span>
            <span className='site-name' >Book Tracker</span>
        </div>
        <div className="menu-bar">
            <span className="menu">Home</span>
            <span className="menu">My Books</span>
            <span className="menu">Browse</span>
        </div>
        <div className="search-bar">
            <input type="text" placeholder='Buscar libro...'/>
        </div>
    </div>
  )
}

export default Header