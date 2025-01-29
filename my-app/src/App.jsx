import { Route, Routes } from 'react-router-dom'

import { Login } from './Components/login'
import { Signup } from './components/Signup'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App