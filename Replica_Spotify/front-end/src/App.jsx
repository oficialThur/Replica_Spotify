import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Songs from './pages/Songs'
import Song from './pages/Song'

const App = () => {
  return <BrowserRouter>
  <Header />
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artist/:id' element={<Artist />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/song/:id' element={<Song />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App