import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hijo from './components/Hijo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Hijo nombre={"Omar"}/>
   <Hijo nombre={"Martha"}/>
   <Hijo nombre={"Andrea"}/>
   <Hijo nombre={"Viviana"}/>
   </>
  )
}

export default App
