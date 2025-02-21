import { useState } from 'react'
import Navbar from './components/Navbar'
import Introduce from './components/Introduce'
import Skils from './components/Skils'
import Profile from './components/Profile'
import Projects from './components/Projects'
function App() {
 

  return (
    <>
     <Navbar/>
     <Introduce/>
     <Skils/>
     <Profile/>
     <Projects/>
    </>
  )
}

export default App
