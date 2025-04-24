import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import BookList from './components/bookList/BookList'
import books from './components/data/Books'
import BookDetails from './components/bookDetails/BookDetails'
import NotFound from './components/notFound/NotFound'
import Protected from './components/protected/Protected'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'

function App() {

  const [bookList, setBookList] = useState(books);
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('Anaklusmos');
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Routes>
          
          {/* LAYOUT COMUN DE TODAS LAS PAGINAS */}
          <Route element={
            <Layout header={
                <Header
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                  userName={userName}
                  books={bookList}
                />}
              footer={<Footer />}
            />
          }
          >
            {/* TODAS LAS RUTAS */}

            {/* INICIO */}
            <Route path='/' element={<Home />} />

            {/* LOGIN */}
            <Route path='/login' element={<Login setIsLogged={setIsLogged} />} />

            {/* LISTA */}
            <Route element={<Protected isLogged={isLogged} /> } >
              <Route path='/my-books' element={<BookList books={bookList} />} />
            </Route>

            {/* ITEM LIBRO */}
            <Route path='my-books/:id' element={<BookDetails />} />

            <Route path="*" element={ <NotFound /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
