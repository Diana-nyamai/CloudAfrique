import { Route, Routes } from 'react-router-dom'
import {Footer, Navbar} from './components'
import { About, Contact, Donate, Home } from './pages'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
