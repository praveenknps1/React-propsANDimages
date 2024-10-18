import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './props_fakestore/parent'
import Second from './props_childern(FS)/one'
import Image from './ImagesModules/images'

function App() {
  

  return (
    <>
     <Parent/>
     <Second/>
     <Image/>
    </>
  )
}

export default App
