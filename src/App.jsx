import { useState } from 'react'
import Navbar from './components/Navbar'
import Introduce from './components/Introduce'
import Skils from './components/Skils'
import Profile from './components/Profile'
import { LanguageContexts } from './context/LanguageContexts'
import Projects from './components/Projects'
function App() {
 

  return (
    <>
    <LanguageContexts>
     <Navbar/>
     <Introduce/>
     <Skils/>
     <Profile/>
     <Projects/>
     </LanguageContexts>
   
    </>
  )
}

export default App
