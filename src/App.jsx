import './App.css'
import { Nav } from './components/layouts/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
// import { Create } from './components/pages/Create'
function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home/>} />
        {/* <Route path='/crear' element={<Create/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
