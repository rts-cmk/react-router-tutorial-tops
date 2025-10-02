import React from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import RoutesPages from './pages/RoutesPages'
import UseNavigateInfo from './pages/UseNavigateInfo'
import NotFoundPageInfo from './pages/404PageInfo'
import NotFound from './pages/PageNotFound'


function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/routes-pages' element={<RoutesPages />} />
        <Route path='/UseNavigateInfo' element={<UseNavigateInfo />} />
        <Route path='/notfoundpageinfo' element={<NotFoundPageInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}


export default App
