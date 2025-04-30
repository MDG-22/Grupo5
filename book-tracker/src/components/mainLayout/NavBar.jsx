import React from 'react'
import { useNavigate } from 'react-router-dom';
import UserMenu from '../userMenu/UserMenu';
import SearchBar from '../searchBar/SearchBar';

const NavBar = ({isLogged, setIsLogged, userName, books}) => {

  const navigate = useNavigate();

  return (
    <div className='header-container'>
      <div className="logo" onClick={() => navigate('/')} >
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

export default NavBar