import { Route, Routes } from 'react-router-dom'

import { Login } from './Components/login'
import { Signup } from './components/Signup'
import Productform from './components/Productform'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Productform" element={<Productform/>} />
    </Routes>
    </>
  )
}

export default App