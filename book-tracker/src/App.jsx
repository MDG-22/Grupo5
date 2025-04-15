import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header/Header'
import BookList from './components/bookList/BookList'

function App() {

  return (
    <>
      <div className='pagewrap'>
          <Header />
        <BrowserRouter>
          <Routes>
            {/* Aca abajo linkeen las paginas que hagan */}
            <Route path="lista" element={ <BookList /> } />

            {/* <Route path="*" element={ <NotFound /> } /> */}
          </Routes>
        </BrowserRouter>
        <hr />
      </div>
    </>
  )
}

export default App
