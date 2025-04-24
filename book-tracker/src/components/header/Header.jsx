import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
import UserMenu from '../userMenu/UserMenu';

const Header = ({isLogged, setIsLogged, userName, books}) => {

  const navigate = useNavigate();

  return (
    <div className='header-container'>
      <div className="logo">
          <span>img</span>
          <span className='site-name' >Book Tracker</span>
      </div>

      <div className="menu-bar">
          <span className="menu" onClick={() => navigate('/')}>Inicio</span>
          <span className="menu" onClick={() => navigate('my-books')} >Mis Libros</span>
          <span className="menu" onClick={() => navigate('browse')} >Browse</span>
          <SearchBar books={books} />
      </div>

      <UserMenu 
      isLogged={isLogged}
      setIsLogged={setIsLogged}
      username={userName}
      />
    </div>
  )
}

export default Header