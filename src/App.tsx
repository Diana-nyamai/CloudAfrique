import { Route, Routes } from 'react-router-dom'
import {Footer, Navbar} from './components'
import { Home } from './pages'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
