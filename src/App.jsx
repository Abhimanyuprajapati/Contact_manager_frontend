import { Route, Routes } from 'react-router-dom'
import { Home } from './container/home'
import Signup from './container/Signup'
import Login from './container/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
